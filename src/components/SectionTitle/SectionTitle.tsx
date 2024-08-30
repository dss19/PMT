import React from 'react';
import './section-title.css';
import ISectionProps from '../../models/ISectionProps';

const SectionTitle: React.FC<ISectionProps> = ({ title }) => {
    return (
        <h2 className="section-title">{ title }</h2>
    );
};

export default SectionTitle;