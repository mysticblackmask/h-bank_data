import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ProductOffers from './pages/ProductOffers';
import OfferDetail from './pages/ProductOffers/OfferDetail';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<ProductOffers />} />
          <Route path="/offer/:id" element={<OfferDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
