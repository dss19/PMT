import React from 'react';

interface DesktopFilterProps {
  subcategories: { id: string; slug: string; name: string }[];
  selectedSubCategory: string | null;
  setSelectedSubCategory: (slug: string | null) => void;
}

const DesktopFilter: React.FC<DesktopFilterProps> = ({ subcategories, selectedSubCategory, setSelectedSubCategory }) => {
  return (
    <ul className="category-filter-list">
      <li
        className={`category-filter-item ${selectedSubCategory === null ? 'active' : ''}`}
        onClick={() => setSelectedSubCategory(null)}
      >
        Все товары
      </li>
      {subcategories.map(sub => (
        <li
          className={`category-filter-item ${selectedSubCategory === sub.slug ? 'active' : ''}`}
          key={sub.id}
          onClick={() => setSelectedSubCategory(sub.slug)}
        >
          {sub.name}
        </li>
      ))}
    </ul>
  );
};

export default DesktopFilter;

export {};
