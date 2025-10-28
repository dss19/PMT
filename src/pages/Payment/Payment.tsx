import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import PaymentContent from './PaymentContent/PaymentContent';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const Payment: React.FC = () => {

    const seoData = getSeo({
        title: 'Оплата и доставка',
        description: 'Условия оплаты и доставки продукции «Пневмоторг». Удобные способы оплаты, быстрая доставка по России, гарантия на весь ассортимент.',
        keywords: 'оплата пневмоторг, доставка пневмоинструмента, условия оплаты, быстрая доставка, гарантия, купить пневмоинструмент',
        url: 'https://pnevmo-torg.ru/payment',
    });

    return (
        <main id='page-payment' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={`Оплата и доставка`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <PaymentContent />
                </Container>
            </Section>
        </main>
    );
};

export default Payment;