const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const slugify = require('slugify');
const path = require('path');

interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
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
                    { name: "iPhone 13", price: 799, description: "Смартфон от Apple" },
                    { name: "Samsung Galaxy S21", price: 699, description: "Смартфон от Samsung" }
                ]
            },
            {
                name: "Ноутбуки",
                products: [
                    { name: "MacBook Pro", price: 1299, description: "Ноутбук от Apple" },
                    { name: "Dell XPS 13", price: 999, description: "Ноутбук от Dell" }
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
                    { name: "LG X127", price: 499, description: "Холодильник от LG" }
                ]
            },
            {
                name: "Стиральные машины",
                products: [
                    { name: "Bosch Serie 6", price: 599, description: "Стиральная машина от Bosch" }
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

const generateData = (): Category[] => {
    const categorySlugs = new Set<string>();
    const categories: Category[] = rawCategories.map(cat => {
        const categorySlug = generateUniqueSlug(cat.name, categorySlugs);

        const subCategorySlugs = new Set<string>();
        const subCategories: SubCategory[] = cat.subcategories.map(sub => {
            const subSlug = generateUniqueSlug(sub.name, subCategorySlugs);

            const productSlugs = new Set<string>();
            const products: Product[] = sub.products.map(prod => {
                const prodSlug = generateUniqueSlug(prod.name, productSlugs);
                return {
                    id: uuidv4(),
                    name: prod.name,
                    slug: prodSlug,
                    price: prod.price,
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
