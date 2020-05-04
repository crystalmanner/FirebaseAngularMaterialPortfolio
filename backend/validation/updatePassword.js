
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateUpdatePassword(data) {
  let errors = {};
  data.oldPassword = !isEmpty(data.oldPassword) ? data.oldPassword : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : '';

  if (!Validator.isLength(data.oldPassword, { min: 6, max: 30 })) {
    errors.oldPassword = 'Old Password must have 6 chars';
  }

  if (Validator.isEmpty(data.oldPassword)) {
    errors.oldPassword = 'Old Password is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must have 6 chars';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.passwordConfirm, { min: 6, max: 30 })) {
    errors.passwordConfirm = 'Password must have 6 chars';
  }

  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Password and Confirm Password must match';
  }

  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}