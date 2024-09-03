import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';

const Catalog: React.FC = () => {

    const [title] = useState<string>('Каталог');
        
    return (
        <main id='page-catalog' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={title} />
                </Container>                
            </Section>
        </main>
    );
};

export default Catalog;