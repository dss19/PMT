import React, { useEffect, useState } from 'react';
import './news-list.css';
import NewsItem from '../NewsItem/NewsItem';
import INews from '../../../models/INews';

const NewsList: React.FC = () => {
    const [newsList, setNewsList] = useState<INews[]>([]);

    useEffect(() => {
        fetch('/data/news.json')
            .then((response) => response.json())
            .then((data) => setNewsList(data));
    }, []);

    return (
        <ul className="news-list">
            {newsList.map((news) => (
                <NewsItem key={news.id} news={news} />
            ))}
        </ul>
    );
};

export default NewsList;
