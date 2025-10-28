import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Container from '../../components/Container/Container';
import ProductPageInner from './ProductPageInner/ProductPageInner';
import { useGetProductBySlugQuery } from '../../api/categoriesApi';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const ProductPage: React.FC = () => {

    const { productSlug } = useParams<{ productSlug: string }>();
    const { data: product, isLoading, isError } = useGetProductBySlugQuery(productSlug || '');

    // Предотвращаем ошибку до загрузки данных
    if (isLoading) return null;
    if (isError || !product) return null;

    const seoData = getSeo({
        title: `${product?.name} от ${product?.price} рублей с доставкой по РФ` || 'Карточка товара',
        description: `${product?.description.slice(0, 150).split(' ').slice(0, -1).join(' ')}...}` || `Купить ${product?.name} от ${product?.price} рублей с доставкой по РФ`,
        keywords: `${product?.name}, купить ${product?.name}, оптом, фото ${product?.name}, характеристики ${product?.name}`,
        url: `https://pnevmo-torg.ru/catalog/${product?.categoryslug}/${product?.slug}`,
    });

    return (
        <main id='page-product' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                </Container>
            </Section>
            <Section>
                <Container>
                    <ProductPageInner />
                </Container>
            </Section>
        </main>
    );
};

export default ProductPage;