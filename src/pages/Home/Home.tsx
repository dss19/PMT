import React from 'react';
import Section from '../../components/Section/Section';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CatalogGrid from '../../pages/Catalog/CatalogGrig/CatalogGrid';
import banner from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import logo from '../../assets/images/logo.png';
import './home.css';
import Container from '../../components/Container/Container';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const Home: React.FC = () => {

    const seoData = getSeo({
        title: 'Главная страница',
        description: 'Компания «Пневмоторг» — производитель и поставщик профессионального пневматического инструмента и оборудования. Продажа, сервис и доставка по всей России.',
        keywords: 'пневмоторг, пневмоинструмент, пневматический инструмент, оснастка, борфрезы, аккумуляторный инструмент, купить аккумуляторный инструмент, купить пневмоинструмент, производство, поставки, Россия',
        url: 'https://pnevmo-torg.ru',
    });

    return (
        <main id='page-home' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <div className="home-banner">
                <img src={banner} alt="banner" className="home-banner-img" />
                <h1 className="home-banner-ttl">Надежный пневматический,<br />аккумуляторный инструмент<br />и оснастка от производителя<br /><span>с доставкой по всей России</span></h1>
            </div>
            <div className="home-brand">
                <Container>
                    <div className="home-brand-top">
                        <div className="home-brand-left">
                            <p className="home-brand-rmt">О бренде</p>
                            <img className='home-brand-logo' src={logo} alt="logo" />
                        </div>
                        <div className="home-brand-right">
                            <h3 className="home-brand-about"><span>РМТ</span> — это инновационный современный бренд пневматического и&nbsp;аккумулятроного инструмента, созданный командой специалистов компании <span>Пневмоторг</span>, с&nbsp;безупречным опытом и&nbsp;репутацией! Инструменты <span>РМТ</span> объединяют в&nbsp;себе передовые технологии и&nbsp;надежность, что делает их идеальным выбором как для профессионалов, так и&nbsp;для тех, кто ценит качество и&nbsp;долговечность в&nbsp;каждой мелочи.</h3>
                        </div>
                    </div>
                </Container>
                <div className="home-brand-banner">
                    <img src={banner2} alt="banner" />
                </div>
            </div>
            <Section>
                <Container>
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

export default Home;