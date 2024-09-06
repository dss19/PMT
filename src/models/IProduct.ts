export default interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    sku: string;
    images: string[];
    description?: string;
}

