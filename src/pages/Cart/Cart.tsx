import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Container from '../../components/Container/Container';
import CartInner from './CartInner/CartInner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const Cart: React.FC = () => {

    const seoData = getSeo({
        title: 'Корзина товаров',
        description: 'Корзина покупок на сайте «Пневмоторг». Проверьте выбранные товары перед оформлением заказа.',
        keywords: 'корзина, заказ, оформить заказ, покупка пневмоинструмента, пневмоторг',
        url: 'https://pnevmo-torg.ru/cart',
    });

    return (
        <main id='page-cart' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={`Оформление заказа`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <CartInner />
                </Container>
            </Section>
        </main>
    );
};

export default Cart;