import React from "react";
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../api/categoriesApi'
import './footer-links.css';

const FooterLinks: React.FC = () => {

    const { data: categories } = useGetCategoriesQuery();

    return (
        <div className="footer-links">
            <Link to={`/catalog`} className="footer-links-item">Каталог</Link>
            {categories?.map((category) => (
                <Link key={category.name} to={`/catalog/${category.slug}`} className="footer-links-item">{category.name}</Link>
            ))}
        </div>
    )
}

export default FooterLinks;