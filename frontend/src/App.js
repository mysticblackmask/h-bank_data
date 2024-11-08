import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ProductOffers from './pages/ProductOffers';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductOffers />
    </Provider>
  );
}

export default App;
