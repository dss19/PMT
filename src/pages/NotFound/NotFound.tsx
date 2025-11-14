import React from 'react';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';
import './not-found.css';

const NotFound: React.FC = () => {

    const seoData = getSeo({
        title: 'Страница не найдена - Ошибка 404',
        description: 'Запрошенная страница не существует. Ошибка 404. Перейдите на главную страницу https://pnevmo-torg.ru или воспользуйтесь поиском для нахождения нужной информации',
        keywords: 'ошибка 404, страница не найдена, 404, страница не существует, неправильная ссылка, главная страница, https://pnevmo-torg.ru',
        url: 'https://pnevmo-torg.ru/not-found',
        robots: 'noindex, nofollow',
    });

    return (
        <div className="page-404 main">
            <SEO title={seoData.title} meta={seoData.meta} />
            <div className="page-404-text">Запрошенная страница не существует</div>
            <a href='/' className="page-404-link">на главную</a>
        </div>
    );
};

export default NotFound;