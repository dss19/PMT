import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header-search.css';
import { useGetSearchProductsQuery } from '../../../../../api/categoriesApi';

const HeaderSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Дебаунс: обновление значения запроса с задержкой 500 мс
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(handler);
  }, [query]);

  // Выполнение запроса для поиска, если строка не пуста
  const { data: searchResults, isError } = useGetSearchProductsQuery(debouncedQuery, {
    skip: !debouncedQuery,
  });

  return (
    <div className="header-search">
      <input
        type="text"
        className="header-search-input"
        name="header-search-input"
        placeholder="Что будем искать?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      { query && (
        <div className='header-search-clear' onClick={() => setQuery('')}>
            <span></span>            
        </div>
      )}

      {/* Если есть введённый запрос и результаты, отображаем выпадающее окно */}
      {debouncedQuery && searchResults && (
        <div className="header-search-results">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <Link
                className="header-search-results-link"
                key={product.id}
                to={`/catalog/${product.categoryslug}/${product.slug}`}
                onClick={() => setQuery('')}
              >
                {product.name}
              </Link>
            ))
          ) : (
            <div style={{ padding: '0.5rem 0' }}>Ничего не найдено</div>
          )}
        </div>
      )}

      {/* Отображение ошибки поиска */}
      {isError && (
        <div
          className="header-search-error"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '1px solid red',
            zIndex: 1000,
            padding: '0.5rem',
          }}
        >
          Ошибка при поиске
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
