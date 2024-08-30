import React from 'react';
import ISectionProps from '../../models/ISectionProps';
import './section.css';

const SectionWithTitle: React.FC<ISectionProps> = ({ children }) => {
    return (
        <section className="section">
            { children }
        </section>
    );
};

export default SectionWithTitle;