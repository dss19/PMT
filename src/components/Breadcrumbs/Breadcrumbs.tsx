import React from 'react';
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

const BreadCrumbs: React.FC = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/').filter(Boolean);

    const generateBreadcrumb = (pathArray: string[]) => {
        let path = '';
        return pathArray.map((part, index) => {
            path += `/${part}`;
            const isLast = index === pathArray.length - 1;

            if (breadcrumbMap[`/${part}`]) {
                return !isLast ? (
                    <React.Fragment key={index}>
                        <Link to={path}>{breadcrumbMap[`/${part}`]}</Link>&nbsp;—&nbsp;
                    </React.Fragment>
                ) : (
                    breadcrumbMap[`/${part}`]
                );
            }

            const name = decodeURIComponent(part);
            return !isLast ? (
                <React.Fragment key={index}>
                    <Link to={path}>{name}</Link>&nbsp;—&nbsp; 
                </React.Fragment>
            ) : (
                name
            );
        });
    };

    return (
        <div className="breadcrumbs">
            <Link to="/">Главная</Link>&nbsp;—&nbsp;{generateBreadcrumb(pathArray)}
        </div>
    );
};

export default BreadCrumbs;
