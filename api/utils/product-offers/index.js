const map = require("lodash/map");
const find = require("lodash/find");
const isEmpty = require("lodash/isEmpty");

const parseOffers = (data) => {
  if (
    !data.partner_banks ||
    data.partner_banks instanceof Array !== true ||
    !data.deposits ||
    data.deposits instanceof Array !== true ||
    !data.countries ||
    data.countries instanceof Array !== true
  ) {
    throw new Error("Offers endpoint data is not in a valid format!");
  }
  return map(data.deposits, (dp) => {
    const parsedDeposit = { ...dp };
    parsedDeposit.tax_number_required = false;

    const partnerBank = find(data.partner_banks, { id: dp.partner_bank.id });
    parsedDeposit.risk_banner = isEmpty(partnerBank.risk_banner)
      ? null
      : partnerBank.risk_banner;
    if (
      parsedDeposit.required_customer_data &&
      parsedDeposit.required_customer_data.includes("TAX_NUMBER")
    ) {
      parsedDeposit.tax_number_required = true;
    }
    parsedDeposit.partner_bank = {
      ...partnerBank,
      country: find(data.countries, { country_code: partnerBank.country }),
    };

    return parsedDeposit;
  });
};

module.exports = { parseOffers };
