const currency = require("currency.js");

export default ({ app }, inject) => {
  inject("test", currency);
};
