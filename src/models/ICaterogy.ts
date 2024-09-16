import ISubCategory from './ISubCategory';

export default interface Category {
    id: string;
    name: string;
    slug: string;
    subCategories: ISubCategory[];
    iconurl: string;
}