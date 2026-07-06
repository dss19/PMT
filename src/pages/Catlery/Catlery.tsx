import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import SEO from '../../components/Seo/Seo';
import './catlery.css';
import { getSeo } from '../../utils/seo';

const Catlery: React.FC = () => {

    const seoData = getSeo({
        title: 'Импорт режущего инструмента',
        description: 'Узнайте больше о компании «Пневмоторг» и бренде РМТ — лидере на рынке пневматического инструмента. Наш опыт, миссия, качество продукции и гарантии для клиентов.',
        keywords: 'О компании, пневмоторг, РМТ, PMT, пневмоинструмент, о компании пневмоторг, производство пневмоинструмента, производитель пневмоинструмента, история компании, качество, надёжность',
        url: 'https://pnevmo-torg.ru/catlery',
        robots: 'index, follow',
    });

    type LogoItem = {
        name: string;
        src: string;
    };

    const importAll = (r: __WebpackModuleApi.RequireContext): LogoItem[] =>
        r.keys().map((fileName: string) => {
            const cleanName = fileName
                .replace("./", "")
                .replace(".webp", "")
                .replace(/-/g, " ")
                .trim();

            return {
                name: cleanName,
                src: r(fileName) as string,
            };
        });

    const logos = importAll(
        require.context("../../assets/images/logos", false, /\.webp$/)
    );

    return (
        <main id='page-catlery' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={`Параллельный импорт иностранного режущего инструмента в Россию от «Пневмоторг»`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <h4 className="catlery-subttl">Компания Пневмоторг осуществляет поставки сменных пластин, фрез, державок и оснастки ушедших брендов со склада и под заказ. Цены и сроки поставок вы можете уточнить у наших менеджеров по телефону или по электронной почте.</h4>
                    <div className="catlery-grid">
                        {logos.map((logo) => (
                            <div key={logo.src} className='catlery-item'>
                                <img src={logo.src} alt={logo.name} className='catlery-img' />
                                <div className='catlery-name'>{logo.name}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
};

export default Catlery;
