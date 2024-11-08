// WITH REACT PACK
import initialState from './state';
import { handle } from 'redux-pack';

import { FETCH_PRODUCT_OFFERS, OPEN_ACCOUNT } from './types';

const productOffersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCT_OFFERS:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          isLoading: true,
          productOffersError: null,
        }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        failure: (prevState) => ({ ...prevState, productOffersError: payload }),
        success: (prevState) => ({ ...prevState, productOffers: payload.data }),
      });
    case OPEN_ACCOUNT:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          isLoading: true,
          openAccountError: null,
        }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        failure: (prevState) => ({ ...prevState, openAccountError: payload }),
        success: (prevState) => ({ ...prevState, openAccount: payload.data }),
      });
    default:
      return initialState;
  }
};

export default productOffersReducer;
