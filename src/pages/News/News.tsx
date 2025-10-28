import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import NewsList from './NewsList/NewsList';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const News: React.FC = () => {

    const seoData = getSeo({
        title: 'Новости РМТ',
        description: 'Актуальные новости компании «Пневмоторг»: новые модели пневмоинструмента, акции, производственные обновления и события отрасли.',
        keywords: 'новости, пневмоторг, пневмоинструмент, новости пневмоторг, новые модели пневмоинструмента, акции, обновления ассортимента, события компании',
        url: 'https://pnevmo-torg.ru/news',
    });

    return (
        <main id="page-news" className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={`Новости РМТ`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <NewsList />
                </Container>
            </Section>
        </main>
    );
};

export default News;