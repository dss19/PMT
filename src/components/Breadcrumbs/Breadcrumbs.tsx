import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGetCategoriesQuery, useGetProductBySlugQuery } from '../../api/categoriesApi';
import "./breadcrumbs.css";

const breadcrumbMap: Record<string, string> = {
    '/': 'Главная',
    '/about': 'О компании',
    '/news': 'Новости',
    '/payment': 'Оплата и доставка',
    '/contacts': 'Контакты',
    '/catalog': 'Каталог',
    '/cart': 'Корзина'
};

const BreadCrumbs: React.FC = () => {
    const location = useLocation();
    const { data: categories = [] } = useGetCategoriesQuery();
    
    const pathArray = location.pathname.split('/').filter(Boolean);
    const productSlug = pathArray[pathArray.length - 1];

    const { data: product } = useGetProductBySlugQuery(productSlug, {
        skip: pathArray.length < 3,
    });

    const generateBreadcrumb = useMemo(() => {
        let path = '';
        return pathArray.map((part, index) => {
            path += `/${part}`;
            const isLast = index === pathArray.length - 1;

            let name = breadcrumbMap[path] || decodeURIComponent(part);
            let linkPath = path;

            // Проверка категорий
            const category = categories.find(cat => cat.slug === part);
            if (category) {
                name = category.name;
                linkPath = `/catalog/${category.slug}`;
            }

            // Проверка подкатегорий
            const parentCategory = categories.find(cat => cat.subcategories.some(sub => sub.slug === part));
            const matchedSubCategory = parentCategory?.subcategories.find(sub => sub.slug === part);

            if (matchedSubCategory) {
                name = matchedSubCategory.name;
                linkPath = `/catalog/${parentCategory!.slug}/${matchedSubCategory.slug}`;
            }

            // Проверка товара
            if (product && product.slug === part) {
                name = product.name;
                linkPath = `/catalog/${product.categoryslug}/${product.slug}`;
            }

            return (
                <React.Fragment key={index}>
                    {!isLast ? <Link to={linkPath}>{name}</Link> : <span>{name}</span>}
                    {!isLast && <span>&nbsp;—&nbsp;</span>}
                </React.Fragment>
            );
        });
    }, [categories, product, pathArray]);

    return (
        <div className="breadcrumbs">
            <Link to="/">Главная</Link>&nbsp;—&nbsp;{generateBreadcrumb}
        </div>
    );
};

export default BreadCrumbs;