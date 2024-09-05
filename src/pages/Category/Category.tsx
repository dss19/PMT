import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Container from '../../components/Container/Container';
import CategoryInner from './CategoryInner/CategoryInner';

const Category: React.FC = () => {
    

    return (
        <main id='page-category' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                </Container>                
            </Section>
            <Section>                
                <CategoryInner />                               
            </Section>
        </main>
    );
};

export default Category;
