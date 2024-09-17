import ISubCategory from './ISubCategory';

export default interface Category {
    id: string;
    name: string;
    slug: string;
    subcategories: ISubCategory[];
    iconurl: string;
}