import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import AboutContent from './AboutContent/AboutContent';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const About: React.FC = () => {

    const seoData = getSeo({
        title: 'О компании',
        description: 'Узнайте больше о компании «Пневмоторг» и бренде РМТ — лидере на рынке пневматического инструмента. Наш опыт, миссия, качество продукции и гарантии для клиентов.',
        keywords: 'О компании, пневмоторг, РМТ, PMT, пневмоинструмент, о компании пневмоторг, производство пневмоинструмента, производитель пневмоинструмента, история компании, качество, надёжность',
        url: 'https://pnevmo-torg.ru/about',
        robots: 'index, follow',
    });

    return (
        <main id='page-about' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={`О компании Пневмоторг и бренде РМТ`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <AboutContent />
                </Container>
            </Section>
        </main>
    );
};

export default About;