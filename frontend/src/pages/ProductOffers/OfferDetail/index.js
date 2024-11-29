import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOffer } from '../../../store/actions';

const OfferDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchOffer(id));
  // }, [id, dispatch]);
  // const offer = useSelector((state) => state.productOffer);

  const offers = useSelector((state) => state.productOffers);
  const data = offers.find((offer) => offer.id === id);
  if (!data) {
    return navigate('/');
  }
  const {
    nominal_interest_rate,
    currency,
    number_of_terms,
    min_placement_amount,
    max_placement_amount,
    prolongation_enabled,
    partner_bank,
    early_termination_effective_interest_rate,
  } = data;

  const detail = [
    {
      title1: 'Nominal rate',
      value1: `${nominal_interest_rate}% p.a.`,
      title2: 'Currency',
      value2: currency,
    },
    {
      title1: 'Term',
      value1: `${number_of_terms / 12} years`,
      title2: 'Min/Max investment amount',
      value2: `${min_placement_amount} - ${max_placement_amount}`,
    },
    {
      title1: 'Availability',
      value1: prolongation_enabled ? 'True' : 'False',
      title2: 'Withholding tax',
      value2: `${partner_bank.country.source_tax} %`,
    },
    {
      title1: 'Interest in case of early termination',
      value1: early_termination_effective_interest_rate,
    },
  ];

  return (
    <div className={styles.detail}>
      <div className={styles.mgt1}>
        <button
          onClick={() => {
            navigate('/');
          }}
          aria-label="Go back to main page"
        >
          Main
        </button>
      </div>
      <div>
        <h2>
          Detail <small>{data.partner_bank.name}</small>
        </h2>
        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <div className={`${styles.col} ${styles.col1}`}>Interset Information</div>
            <div className={`${styles.col} ${styles.col4}`} />
            <div className={`${styles.col} ${styles.col1}`}>Product Details</div>
          </li>
          {detail.map((field, index) => (
            <li className={`${styles.tableRow}`} key={index}>
              <div className={`${styles.col} ${styles.col2}`}>{field.title1}</div>
              <div className={`${styles.col} ${styles.col3}`}>{field.value1}</div>
              <div className={`${styles.col} ${styles.col4}`} />
              <div className={`${styles.col} ${styles.col2}`}>
                {field.title2 ? field.title2 : null}
              </div>
              <div className={`${styles.col} ${styles.col3}`}>
                {field.value2 ? field.value2 : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OfferDetail;
