import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
