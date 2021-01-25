export const required = (value) => (value ? undefined : "Required");

export const fullNameValidator = (value) =>
  /^(?=.{6,})([a-zA-Z]+\s{1}[a-zA-Z]+)$/.test(value)
    ? undefined
    : "Invalid Full Name";

export const addressValidator = (value) =>
  /^(?=.{5,})([a-zA-Z0-9]+\s{1}[0-9]+)$/.test(value)
    ? undefined
    : "Invalid Address";

export const phoneValidator = (value) =>
  /^(?=.{7,})([0-9])+$/.test(value)
    ? undefined
    : "Must have at least 7 numbers";

export const emailValidator = (value) =>
  /^[A-Z0-9.%+-]+@[A-Z0-9.]+.[A-Z]{2,4}$/i.test(value)
    ? undefined
    : "Invalid Email";

export const boilerTypeValidator = (value) =>
  /([A-D '-]){1,8}$/.test(value)
    ? undefined
    : "A boiler type included is not available. Currently boilers types available are: A, B, C and D.";

//Boilers validators
export const lotValidator = (value) =>
  /[0-9]{3}[-][A-D]{1}[0-9]{2}/.test(value)
    ? undefined
    : "Invalid lot name. It must starts with three numbers follow by a '-' simbol, then a letter (A,B,C or D) and then " +
      "two more numbers";

export const dateValidator = (value) =>
/^\d{4}-\d{2}-\d{2}$/.test(value) ? undefined : "Invalid date format";

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
