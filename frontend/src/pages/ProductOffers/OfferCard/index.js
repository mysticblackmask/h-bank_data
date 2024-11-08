import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

const OfferCard = props => {
  const openDetails = e => {
    e.preventDefault();
    // TODO: implement details for the product offer
  };

  const { name: partnerBankName } = props.offer.partner_bank;
  console.log(props.openAccount.status);
  console.log(props.openAccount.offerId);
  console.log(props.offer.id);

  return (
    <div className={styles.offerCardWrapper}>
      <h3 className={styles.bankName}>{partnerBankName}</h3>
      <div className={styles.row}>
        <div className={styles.interestRate}>{props.offer.nominal_interest_rate}% p.a.</div>
        <div>{props.offer.number_of_terms} Months</div>
        <div className={styles.countryAndCurrency}>
          {props.offer.partner_bank.country.name} in {props.offer.currency}
        </div>
        <div>
          <button
            disabled={props.openAccount.status && props.openAccount.offerId === props.offer.id}
            onClick={() => props.ctaClick(props.offer)}
          >
            Open Account
          </button>
        </div>
      </div>
      <div className={styles.detailsLinkWrapper}>
        {/*eslint-disable jsx-a11y/anchor-is-valid*/}
        <a href="#" onClick={openDetails}>
          Product details
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  openAccount: state.openAccount,
});

export default connect(mapStateToProps)(OfferCard);
