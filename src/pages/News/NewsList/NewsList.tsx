import React from 'react';
import './news-list.css';
import NewsItem from '../NewsItem/NewsItem';

const NewsList: React.FC = () => {

    return (
        <ul className="news-list">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </ul>
    );
};

export default NewsList;