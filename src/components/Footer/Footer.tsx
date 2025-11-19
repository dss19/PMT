import React from "react";
import './footer.css';
import Navigation from '../Navigation/Navigation';
import ContactsList from "../ContactsList/ContactsList";
import FooterLinks from "./FooterLinks/FooterLinks";
import Container from "../Container/Container";

const Footer: React.FC = () => {

    return (
        <footer className="footer">
            <Container>
                <div className="footer-wrap">
                    <Navigation />
                    <FooterLinks />
                    <ContactsList />
                </div>
            </Container>
        </footer>
    )
}

export default Footer;