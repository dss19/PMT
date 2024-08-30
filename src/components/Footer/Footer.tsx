import React from "react";
import './footer.css';
import Navigation from '../Navigation/Navigation';
import ContactsList from "../ContactsList/ContactsList";
import FooterSocial from "./FooterSocial/FooterSocial";
import Container from "../Container/Container";

const Footer: React.FC = () => {

    return (
        <footer className="footer">
            <Container>
                <div className="footer-wrap">
                    <Navigation />
                    <ContactsList />
                    <FooterSocial />
                </div>
            </Container>            
        </footer>
    )
}

export default Footer;