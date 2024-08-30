import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import NewsList from './NewsList/NewsList';

const News: React.FC = () => {

    const [title] = useState<string>('Новости РМТ');

    return (
        <main id="page-news" className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={title} />
                </Container>                
            </Section>
            <Section>
                <Container>
                    <NewsList />
                </Container>                
            </Section>
        </main>
    );
};

export default News;