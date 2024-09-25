import React, { useState } from 'react';
import './mobile-filter.css';

interface MobileFilterProps {
    subcategories: { id: string; slug: string; name: string }[];
    selectedSubCategory: string | null;
    setSelectedSubCategory: (slug: string | null) => void;
}

const MobileFilter: React.FC<MobileFilterProps> = ({ subcategories, selectedSubCategory, setSelectedSubCategory }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelect = (subCategorySlug: string | null) => {
        setSelectedSubCategory(subCategorySlug);
        setIsDropdownOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-ttl">Выбрать категорию:</div>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedSubCategory
                    ? subcategories.find(sub => sub.slug === selectedSubCategory)?.name || 'Все товары'
                    : 'Все товары'}
                <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
            </div>
            {isDropdownOpen && (
                <div className="dropdown-list-container">
                    <ul className="dropdown-list">
                        <li
                            className={`dropdown-item ${selectedSubCategory === null ? 'active' : ''}`}
                            onClick={() => handleSelect(null)}
                        >
                            Все товары
                        </li>
                        {subcategories.map(sub => (
                            <li
                                className={`dropdown-item ${selectedSubCategory === sub.slug ? 'active' : ''}`}
                                key={sub.id}
                                onClick={() => handleSelect(sub.slug)}
                            >
                                {sub.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileFilter;
export { };