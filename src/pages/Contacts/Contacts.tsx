import React from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import ContactsContent from './ContactsContent/ContactsContent';
import SEO from '../../components/Seo/Seo';
import { getSeo } from '../../utils/seo';

const Contacts: React.FC = () => {

    const seoData = getSeo({
        title: 'Контакты',
        description: 'Контакты компании «Пневмоторг»: адрес, телефон, электронная почта. Свяжитесь с нами для консультации и заказа.',
        keywords: 'контакты пневмоторг, адрес, телефон, почта, связь, заказать, консультация, пневмоторг',
        url: 'https://pnevmo-torg.ru/contacts',
    });

    return (
        <main id='page-contacts' className='main'>
            <SEO title={seoData.title} meta={seoData.meta} />
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={`Контакты`} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <ContactsContent />
                </Container>
            </Section>
        </main>
    );
};

export default Contacts;