import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './app.css';

const About = lazy(() => import('./pages/About/About'));
const Payment = lazy(() => import('./pages/Payment/Payment'));
const News = lazy(() => import('./pages/News/News'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Category = lazy(() => import('./pages/Category/Category'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// Компонент для проверки существования динамических маршрутов
// const RouteValidator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkRouteExists = async () => {
//       // Проверяем только динамические маршруты (/catalog/*, /catalog/*/*)
//       if (location.pathname.startsWith('/catalog/')) {
//         const pathParts = location.pathname.split('/').filter(Boolean);

//         if (pathParts.length === 2) {
//           // Проверяем категорию (/catalog/category-slug)
//           try {
//             const response = await fetch(`https://api.pnevmo-torg.ru/categories/${pathParts[1]}`);
//             if (response.status === 404) {
//               navigate('/404', { replace: true });
//             }
//           } catch (err) {
//             navigate('/404', { replace: true });
//           }
//         } else if (pathParts.length === 3) {
//           // Проверяем продукт (/catalog/category-slug/product-slug)
//           try {
//             const response = await fetch(`https://api.pnevmo-torg.ru/products/slug/${pathParts[2]}`);
//             if (response.status === 404) {
//               navigate('/404', { replace: true });
//             }
//           } catch (err) {
//             navigate('/404', { replace: true });
//           }
//         }
//       }
//     };

//     checkRouteExists();
//   }, [location.pathname, navigate]);

//   return <>{children}</>;
// };

const RouteValidator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const validatedRoutes = React.useRef(new Set<string>());
  const API_BASE_URL = 'https://api.pnevmo-torg.ru';

  useEffect(() => {
    let isMounted = true;

    // Пропускаем уже проверенные маршруты
    if (validatedRoutes.current.has(location.pathname)) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const checkRouteExists = async () => {
        if (location.pathname.startsWith('/catalog/')) {
          const pathParts = location.pathname.split('/').filter(Boolean);

          try {
            let response: Response;

            if (pathParts.length === 2) {
              response = await fetch(`${API_BASE_URL}/categories/${pathParts[1]}`);
            } else if (pathParts.length === 3) {
              response = await fetch(`${API_BASE_URL}/products/slug/${pathParts[2]}`);
            } else {
              return;
            }

            if (!isMounted) return;

            if (!response.ok) {
              if (response.status === 404) {
                navigate('/404', { replace: true });
              }
            } else {
              // Маршрут валиден - кэшируем
              validatedRoutes.current.add(location.pathname);
            }
          } catch (err) {
            if (!isMounted) return;
            navigate('/404', { replace: true });
          }
        }
      };

      checkRouteExists();
    }, 50);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [location.pathname, navigate]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div className='d-none'>Loading...</div>}>
        <RouteValidator>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:slug" element={<Category />} />
            <Route path="/catalog/:categorySlug/:productSlug" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </RouteValidator>
      </Suspense>
    </Router>
  );
}

export default App;