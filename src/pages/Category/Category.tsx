import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Container from '../../components/Container/Container';
import CategoryInner from './CategoryInner/CategoryInner';
import { useGetCategoryBySlugQuery } from '../../api/categoriesApi';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const Category: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();
    const { data: category, isLoading, isError } = useGetCategoryBySlugQuery(slug || '');

    // Предотвращаем ошибку до загрузки данных
    if (isLoading) return null;
    if (isError || !category) return null;

    const seoData = getSeo({
        title: category?.name || 'Каталог товаров',
        description: 'Каталог продукции компании «Пневмоторг»: оснастка, пневмодрели, гайковёрты, шлифмашины, и другое профессиональное пневматическое оборудование.',
        keywords: 'каталог пневмоинструмента, купить пневмодрель, пневмогайковёрт, шлифмашина, компрессор, оборудование, пневмоторг',
        url: `https://pnevmo-torg.ru/catalog/${category?.slug}`,
    });

    return (
        <main id='page-category' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                </Container>
            </Section>
            <Section>
                <CategoryInner />
            </Section>
        </main>
    );
};

export default Category;
