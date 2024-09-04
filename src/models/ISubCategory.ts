import IProduct from './IProduct' 

export default interface SubCategory {
    id: string;
    name: string;
    products: IProduct[];
}