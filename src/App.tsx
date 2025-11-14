import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div className='d-none'>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;