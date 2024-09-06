const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const slugify = require('slugify');
const path = require('path');

interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    sku: string;
    images: string[];
    description?: string;
}

interface SubCategory {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}

interface Category {
    id: string;
    name: string;
    slug: string;
    subCategories: SubCategory[];
}

const rawCategories = [
    {
        name: "Электроника",
        subcategories: [
            {
                name: "Смартфоны",
                products: [
                    { name: "iPhone 13", price: 799, description: "Смартфон от Apple", images: [], sku: "article" },
                    { name: "Samsung Galaxy S21", price: 699, description: "Смартфон от Samsung", images: [], sku: "article" }
                ]
            },
            {
                name: "Ноутбуки",
                products: [
                    { name: "MacBook Pro", price: 1299, description: "Ноутбук от Apple", images: [], sku: "article" },
                    { name: "Dell XPS 13", price: 999, description: "Ноутбук от Dell", images: [], sku: "article" }
                ]
            }
        ]
    },
    {
        name: "Бытовая техника",
        subcategories: [
            {
                name: "Холодильники",
                products: [
                    { name: "LG X127", price: 499, description: "Холодильник от LG", images: [], sku: "article" }
                ]
            },
            {
                name: "Стиральные машины",
                products: [
                    { name: "Bosch Serie 6", price: 599, description: "Стиральная машина от Bosch", images: [], sku: "article" }
                ]
            }
        ]
    },
    {
        name: "Пневмоинструмент",
        subcategories: [
            {
                name: "Прямые шлифмашишки",
                products: [
                    { name: "Пневмошлифмашинка прямая РМТ ИП-2063", price: 10000, description: "Прямая шлифмашинка для зачистки", images: ["/images/2063.jpg", "/images/2063-2.jpg", "/images/2063-3.jpg" ], sku: "article" },
                    { name: "Пневмошлифмашинка прямая РМТ ИП-2020", price: 15000, description: "Прямая шлифмашинка для шлифовки", images: [], sku: "article" }
                ]
            },
            {
                name: "Угловые шлифмашинки",
                products: [
                    { name: "Пневмошлифмашинка угловая РМТ ПШМ-125У", price: 8000, description: "Прямая шлифмашинка для зачистки", images: [], sku: "article" },
                    { name: "Пневмошлифмашинка угловая РМТ ПШМ-230У", price: 12000, description: "Прямая шлифмашинка для шлифовки", images: [], sku: "article" }
                ]
            }
        ]
    }
];

// Функция для генерации уникального слага
const generateUniqueSlug = (name: string, existingSlugs: Set<string>): string => {
    let slug = slugify(name, {
        replacement: '-',  // заменяем пробелы на дефис
        remove: /[*+~.()'"!:@]/g, // удаляем специальные символы
        lower: true,      // переводим в нижний регистр
        strict: true      // строгое преобразование
    });

    let uniqueSlug = slug;
    let suffix = 1;

    // Проверяем уникальность слага
    while (existingSlugs.has(uniqueSlug)) {
        uniqueSlug = `${slug}-${suffix}`;
        suffix++;
    }

    existingSlugs.add(uniqueSlug);
    return uniqueSlug;
};

// Генерация данных для товаров с проверкой на изображения
const generateData = (): Category[] => {
    const placeholderImage = '/images/no-image.png';  // Путь к заглушке
    const categorySlugs = new Set<string>();
    
    const categories: Category[] = rawCategories.map(cat => {
        const categorySlug = generateUniqueSlug(cat.name, categorySlugs);

        const subCategorySlugs = new Set<string>();
        const subCategories: SubCategory[] = cat.subcategories.map(sub => {
            const subSlug = generateUniqueSlug(sub.name, subCategorySlugs);

            const productSlugs = new Set<string>();
            const products: Product[] = sub.products.map(prod => {
                const prodSlug = generateUniqueSlug(prod.name, productSlugs);

                // Проверяем массив изображений
                const images = prod.images && prod.images.length > 0 ? prod.images : [placeholderImage];

                return {
                    id: uuidv4(),
                    name: prod.name,
                    slug: prodSlug,
                    price: prod.price,
                    sku: prod.sku,  // Генерация уникального артикула
                    images,  // Назначение изображений или заглушки
                    description: prod.description
                };
            });

            return {
                id: uuidv4(),
                name: sub.name,
                slug: subSlug,
                products
            };
        });

        return {
            id: uuidv4(),
            name: cat.name,
            slug: categorySlug,
            subCategories
        };
    });

    return categories;
};

const data = generateData();

// Убедитесь, что директория существует
const outputPath = path.join(__dirname, '..', 'public', 'data');
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

// Записываем данные в JSON файл
fs.writeFileSync(path.join(outputPath, 'categories.json'), JSON.stringify(data, null, 2), 'utf-8');
