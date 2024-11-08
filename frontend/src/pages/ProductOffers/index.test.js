import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import ProductOffers from '.';
import store from '../../store';

describe('<ProductOffers />', () => {
  it('Renders the ProductOffers component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductOffer />
      </Provider>,
    );
  });
});
