const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateItemInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";

  if (!Validator.isAlphanumeric(data.username)) {
    errors.username = "Username is invalid";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
