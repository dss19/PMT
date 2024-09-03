import React from 'react';
import './news-item.css';
import INews from '../../../models/INews';

interface NewsProps {
    news: INews
}

const NewsItem: React.FC<NewsProps> = ({ news }) => {

    return (
        <li className="news-item">
            <div className="news-item-wrap">
                <div className="news-item-img">
                    <img src={ news.imageUrl } alt="картинка" />
                </div>
                <div className="news-item-info">
                    <div className="news-item-date">{ news.date }</div>
                    <div className="news-item-ttl">{ news.title }</div>
                    <div className="news-item-text">{ news.text }</div>
                    <div className="news-item-more">Подробнее</div>
                </div>
            </div>
        </li>
    );
};

export default NewsItem;