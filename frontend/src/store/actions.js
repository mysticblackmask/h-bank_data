import { FETCH_PRODUCT_OFFERS, OPEN_ACCOUNT, FETCH_PRODUCT_IDOFFER } from './types';
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

export const fetchOffer = (id) => ({
  type: FETCH_PRODUCT_IDOFFER,
  promise: http.get(`${endpoints.productOffer}${id}`),
});
