import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import AboutContent from './AboutContent/AboutContent';

const About: React.FC = () => {

    const [title] = useState<string>('О компании Пневмоторг и бренде РМТ');
        
    return (
        <main id='page-about' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={title} />
                </Container>                
            </Section>
            <Section>
                <Container>
                    <AboutContent />
                </Container>
            </Section>
        </main>
    );
};

export default About;