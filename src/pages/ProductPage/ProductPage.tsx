import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Container from '../../components/Container/Container';
import ProductPageInner from './ProductPageInner/ProductPageInner';

const ProductPage: React.FC = () => {
    

    return (
        <main id='page-category' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                </Container>                
            </Section>
            <Section>                
                <Container>
                    <ProductPageInner /> 
                </Container>                  
            </Section>
        </main>
    );
};

export default ProductPage;