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
        title: 'Режущий инструмент',
        description: 'Пневмоторг предлагает режущий твердосплавный инструмент для станков ЧПУ: твердосплавные пластины, фрезы, резцы и режущую оснастку ведущих производителей для профессиональной металлообработки.',
        keywords: 'пневмоторг, рмт, режущий твердосплавный инструмент, твердосплавный инструмент купить, инструмент для металлообработки, твердосплавные пластины, сменные режущие пластины, фрезы твердосплавные, твердосплавные фрезы для ЧПУ, режущая оснастка, инструмент для станков ЧПУ, металлорежущий инструмент, купить пластины для фрез, купить твердосплавный инструмент, карбидный инструмент, carbide cutting tools, carbide inserts, Sandvik Coromant режущий инструмент, SECO твердосплавный инструмент, Walter режущие пластины, Kennametal фрезы, Iscar пластины купить, Mitsubishi Materials твердосплавные пластины, Kyocera режущий инструмент, Sumitomo режущий инструмент, Tungaloy инструмент для ЧПУ, Taegutec режущий инструмент, ZCC-CT пластины, Korloy режущий инструмент, YG-1 твердосплавный инструмент, CERATIZIT carbide tools, MAPAL инструмент, Gühring инструмент, Dormer Pramet, Hoffmann Garant, твердосплавная оснастка для станков, инструмент для токарной обработки, инструмент для фрезерной обработки, оснастка ЧПУ, промышленный режущий инструмент',
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
                    <SectionTitle title={`Режущий твердосплавный инструмент для металлообработки от «Пневмоторг»`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <h4 className="catlery-subttl">Компания <strong>Пневмоторг</strong> осуществляет поставки профессионального
                        <strong>режущего твердосплавного инструмента</strong> для металлообработки:
                        сменных режущих пластин, твердосплавных фрез, державок и станочной оснастки
                        ведущих мировых производителей. В наличии на складе и под заказ доступны
                        инструменты для токарной и фрезерной обработки, станков с ЧПУ.
                        Уточнить цены, сроки поставки и подобрать необходимую оснастку вы можете
                        у наших специалистов по телефону или электронной почте.</h4>
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
