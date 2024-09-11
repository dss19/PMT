import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Container from '../../components/Container/Container';
import CartInner from './CartInner/CartInner';

const Cart: React.FC = () => {
    

    return (
        <main id='page-category' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
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