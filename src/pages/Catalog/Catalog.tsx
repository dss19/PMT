import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import CatalogGrid from './CatalogGrig/CatalogGrid';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const Catalog: React.FC = () => {

    const seoData = getSeo({
        title: 'Каталог инструмента',
        description: 'Каталог продукции компании «Пневмоторг»: оснастка, пневмодрели, гайковёрты, шлифмашины, и другое профессиональное пневматическое оборудование.',
        keywords: 'каталог пневмоинструмента, купить пневмодрель, пневмогайковёрт, шлифмашина, компрессор, оборудование, пневмоторг',
        url: 'https://pnevmo-torg.ru/catalog',
    });

    return (
        <main id='page-catalog' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={`Каталог`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <CatalogGrid />
                </Container>
            </Section>
        </main>
    );
};

export default Catalog;