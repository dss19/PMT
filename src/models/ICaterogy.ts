import ISubCategory from './ISubCategory';

export default interface Category {
    id: string;
    name: string;
    subCategories: ISubCategory[];
}