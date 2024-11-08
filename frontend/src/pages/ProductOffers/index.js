import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductOffers } from '../../store/actions';
import List from './List';
import styles from './styles.module.scss';

const ProductOffers = () => {
  const dispatch = useDispatch();
  const offers = useSelector(state => state.productOffers);

  useEffect(() => {
    dispatch(fetchProductOffers());
  }, [dispatch]);

  return offers.length ? (
    <div className={styles.container}>
      <List offers={offers} />
    </div>
  ) : null;
};

export default ProductOffers;
