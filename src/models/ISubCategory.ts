import IProduct from './IProduct' 

export default interface SubCategory {
    id: string;
    name: string;
    slug: string;
    products: IProduct[];
}