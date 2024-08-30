import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Container from '../../components/Container/Container';
import PaymentContent from './PaymentContent/PaymentContent';

const Payment: React.FC = () => {

    const [title] = useState<string>('Оплата и доставка');

    return (
        <main id='page-payment' className='main'>
            <Section>
                <Container>
                    <Breadcrumbs />
                    <SectionTitle title={title} />
                </Container>                
            </Section>
            <Section>
                <Container>
                    <PaymentContent />
                </Container> 
            </Section>
        </main> 
    );
};

export default Payment;