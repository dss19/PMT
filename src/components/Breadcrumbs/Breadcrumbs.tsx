import React, { useEffect, useState } from 'react';
import './breadcrumbs.css';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbMap: Record<string, string> = {
    '/': 'Главная',
    '/about': 'О компании',
    '/news': 'Новости',
    '/payment': 'Оплата и доставка',
    '/contacts': 'Контакты',
    '/catalog': 'Каталог',
    '/cart': 'Корзина'
};

interface Category {
    id: string;
    name: string;
    slug: string;
    subCategories: SubCategory[];
}

interface SubCategory {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}

interface Product {
    id: string;
    name: string;
    slug: string;
}

const BreadCrumbs: React.FC = () => {
    const location = useLocation();
    const [categories, setCategories] = useState<Category[]>([]);

    // Получение данных из JSON
    useEffect(() => {
        fetch('/data/categories.json')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Ошибка загрузки данных:', error));
    }, []);

    const pathArray = location.pathname.split('/').filter(Boolean);

    const generateBreadcrumb = (pathArray: string[]) => {
        let path = '';
        return pathArray.map((part, index) => {
            path += `/${part}`;
            const isLast = index === pathArray.length - 1;

            // Проверка для статических страниц
            if (breadcrumbMap[`/${part}`]) {
                return !isLast ? (
                    <React.Fragment key={index}>
                        <Link to={path}>{breadcrumbMap[`/${part}`]}</Link>&nbsp;—&nbsp;
                    </React.Fragment>
                ) : (
                    breadcrumbMap[`/${part}`]
                );
            }

            // Поиск для динамических страниц (категории и товары)
            let name = decodeURIComponent(part);
            const category = categories.find(cat => cat.slug === part);
            if (category) {
                name = category.name;
            } else {
                categories.forEach(cat => {
                    const subCategory = cat.subCategories.find(sub => sub.slug === part);
                    if (subCategory) {
                        name = subCategory.name;
                    } else {
                        cat.subCategories.forEach(sub => {
                            const product = sub.products.find(prod => prod.slug === part);
                            if (product) {
                                name = product.name;
                            }
                        });
                    }
                });
            }

            return !isLast ? (
                <React.Fragment key={index}>
                    <Link className="breadcrumbs-link" to={path}>{name}</Link>&nbsp;—&nbsp;
                </React.Fragment>
            ) : (
                name
            );
        });
    };

    return (
        <div className="breadcrumbs">
            <Link className="breadcrumbs-link" to="/">Главная</Link>&nbsp;—&nbsp;{generateBreadcrumb(pathArray)}
        </div>
    );
};

export default BreadCrumbs;