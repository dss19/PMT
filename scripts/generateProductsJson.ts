const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
}

interface SubCategory {
    id: string;
    name: string;
    products: Product[];
}

interface Category {
    id: string;
    name: string;
    subCategories: SubCategory[];
}

const categories: Category[] = [
    {
        id: uuidv4(),
        name: "Электроника",
        subCategories: [
            {
                id: uuidv4(),
                name: "Смартфоны",
                products: [
                    {
                        id: uuidv4(),
                        name: "iPhone 13",
                        description: "Смартфон от Apple",
                        price: 799
                    },
                    {
                        id: uuidv4(),
                        name: "Samsung Galaxy S21",
                        description: "Смартфон от Samsung",
                        price: 699
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Ноутбуки",
                products: [
                    {
                        id: uuidv4(),
                        name: "MacBook Pro",
                        description: "Ноутбук от Apple",
                        price: 1299
                    },
                    {
                        id: uuidv4(),
                        name: "Dell XPS 13",
                        description: "Ноутбук от Dell",
                        price: 999
                    }
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        name: "Бытовая техника",
        subCategories: [
            {
                id: uuidv4(),
                name: "Холодильники",
                products: [
                    {
                        id: uuidv4(),
                        name: "LG X127",
                        description: "Холодильник от LG",
                        price: 499
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Стиральные машины",
                products: [
                    {
                        id: uuidv4(),
                        name: "Bosch Serie 6",
                        description: "Стиральная машина от Bosch",
                        price: 599
                    }
                ]
            }
        ]
    }
];

fs.writeFileSync('public/data/categories.json', JSON.stringify(categories, null, 2));
