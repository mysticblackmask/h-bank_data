import { FETCH_PRODUCT_OFFERS, OPEN_ACCOUNT } from './types';
import http from '../http';
import endpoints from '../http/config';

export const fetchProductOffers = () => ({
  type: FETCH_PRODUCT_OFFERS,
  promise: http.get(endpoints.productOffers),
});

export const openAccount = (offerId) => ({
  type: OPEN_ACCOUNT,
  promise: new Promise((resolve) => {
    // just a simulation of an API call
    resolve({ data: { status: true, offerId } });
  }),
});
