export default interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    quantity: number,
    sku: string;
    description?: string;
    images: string[];
}

