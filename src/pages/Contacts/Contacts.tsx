import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import ContactsContent from './ContactsContent/ContactsContent';

const Contacts: React.FC = () => {

    const [title] = useState<string>('Контакты');

    return (
        <main id='page-contacts' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={title} />
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