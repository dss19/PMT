// src/components/SEO.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTag {
    name?: string;
    property?: string;
    content: string;
}

interface SEOProps {
    title: string;
    meta?: MetaTag[];
}

const SEO: React.FC<SEOProps> = ({ title, meta = [] }) => {
    return (
        <Helmet>
            <title>{title}</title>
            {meta.map((tag, index) => {
                if (tag.name) {
                    return <meta key={index} name={tag.name} content={tag.content} />;
                }
                if (tag.property) {
                    return <meta key={index} property={tag.property} content={tag.content} />;
                }
                return null;
            })}
        </Helmet>
    );
};

export default SEO;
