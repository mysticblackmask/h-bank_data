import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import initialState from './state';
import productOffersReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  productOffersReducer,
  initialState,
  composeEnhancers(applyMiddleware(reduxPackMiddleware)),
);
