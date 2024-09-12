import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Container from '../../components/Container/Container';
import CartInner from './CartInner/CartInner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Cart: React.FC = () => {
    
    const [title] = useState<string>('Оформление заказа');

    return (
        <main id='page-cart' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={title} />
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