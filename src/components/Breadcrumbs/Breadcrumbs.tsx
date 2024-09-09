// import React, { useEffect, useState } from 'react';
// import './breadcrumbs.css';
// import { Link, useLocation } from 'react-router-dom';

// const breadcrumbMap: Record<string, string> = {
//     '/': 'Главная',
//     '/about': 'О компании',
//     '/news': 'Новости',
//     '/payment': 'Оплата и доставка',
//     '/contacts': 'Контакты',
//     '/catalog': 'Каталог'
// };

// interface Product {
//     id: string;
//     name: string;
//     slug: string;
//     price: number;
//     sku: string;
//     images: string[];
//     description?: string;
// }

// interface Category {
//     id: string;
//     name: string;
//     slug: string;
//     products: Product[];
// }

// const BreadCrumbs: React.FC = () => {
//     const location = useLocation();
//     const [categories, setCategories] = useState<Category[]>([]);

//     useEffect(() => {
//         fetch('/data/categories.json')
//             .then((response) => response.json())
//             .then((data) => setCategories(data))
//             .catch((error) => console.error('Ошибка загрузки данных:', error));
//     }, []);

//     const pathArray = location.pathname.split('/').filter(Boolean);

//     const generateBreadcrumb = (pathArray: string[]) => {
//         let path = '';
//         return pathArray.map((part, index) => {
//             path += `/${part}`;
//             const isLast = index === pathArray.length - 1;

//             // Проверка для статических страниц
//             if (breadcrumbMap[`/${part}`]) {
//                 return !isLast ? (
//                     <React.Fragment key={index}>
//                         <Link to={path}>{breadcrumbMap[`/${part}`]}</Link>&nbsp;—&nbsp;
//                     </React.Fragment>
//                 ) : (
//                     breadcrumbMap[`/${part}`]
//                 );
//             }

//             // Поиск для категорий и товаров
//             const category = categories.find(cat => cat.slug === part);
//             if (category) {
//                 return !isLast ? (
//                     <React.Fragment key={index}>
//                         <Link className='breadcrumbs-link' to={path}>{category.name}</Link>&nbsp;—&nbsp;
//                     </React.Fragment>
//                 ) : (
//                     category.name
//                 );
//             }

//             // Поиск для товаров
//             const product = categories
//                 .flatMap(cat => (cat?.products || []))  // Проверка на существование `products`
//                 .find(prod => prod?.slug === part);     // Проверка на существование `prod`

//             const name = product ? product.name : decodeURIComponent(part);
            

//             return !isLast ? (
//                 <React.Fragment key={index}>
//                     <Link className='breadcrumbs-link' to={path}>{name}</Link>&nbsp;—&nbsp;
//                 </React.Fragment>
//             ) : (
//                 name
//             );
//         });
//     };

//     return (
//         <div className="breadcrumbs">
//             <Link className='breadcrumbs-link' to="/">Главная</Link>&nbsp;—&nbsp;{generateBreadcrumb(pathArray)}
//         </div>
//     );
// };

// export default BreadCrumbs;

import React, { useEffect, useState } from 'react';
import './breadcrumbs.css';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbMap: Record<string, string> = {
    '/': 'Главная',
    '/about': 'О компании',
    '/news': 'Новости',
    '/payment': 'Оплата и доставка',
    '/contacts': 'Контакты',
    '/catalog': 'Каталог'
};

interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    sku: string;
    images: string[];
    description?: string;
}

interface Category {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}

const BreadCrumbs: React.FC = () => {
    const location = useLocation();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/data/categories.json')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
                setError('Не удалось загрузить данные');
                setLoading(false);
            });
    }, []);

    const pathArray = location.pathname.split('/').filter(Boolean);

    const generateBreadcrumb = (pathArray: string[]) => {
        let path = '';
        return pathArray.map((part, index) => {
            path += `/${part}`;
            const isLast = index === pathArray.length - 1;

            // Проверка для статических страниц
            if (breadcrumbMap[path]) {
                return !isLast ? (
                    <React.Fragment key={index}>
                        <Link to={path}>{breadcrumbMap[path]}</Link>&nbsp;—&nbsp;
                    </React.Fragment>
                ) : (
                    breadcrumbMap[path]
                );
            }

            // Поиск для категорий
            const category = categories.find(cat => cat.slug === part);
            if (category) {
                return !isLast ? (
                    <React.Fragment key={index}>
                        <Link className='breadcrumbs-link' to={path}>{category.name}</Link>&nbsp;—&nbsp;
                    </React.Fragment>
                ) : (
                    category.name
                );
            }

            // Поиск для товаров
            const product = categories
                .flatMap(cat => cat.products)
                .find(prod => prod.slug === part);

            const name = product ? product.name : decodeURIComponent(part);

            return !isLast ? (
                <React.Fragment key={index}>
                    <Link className='breadcrumbs-link' to={path}>{name}</Link>&nbsp;—&nbsp;
                </React.Fragment>
            ) : (
                name
            );
        });
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="breadcrumbs">
            <Link className='breadcrumbs-link' to="/">Главная</Link>&nbsp;—&nbsp;{generateBreadcrumb(pathArray)}
        </div>
    );
};

export default BreadCrumbs;

