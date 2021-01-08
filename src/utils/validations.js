export const nameValidation = (name = '') => name.length === 0 || name.split(' ').length < 1;

export const emailValidation = (email = '') =>
  email.trim().length === 0 ||
  !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.trim());

export const passwordValidation = (password = '') => password.trim().length < 8;

export const repeatPasswordValidation = (password = '', repeatPassword = '') =>
  passwordValidation(password) || repeatPassword !== password;

export const signUpValidation = ({ name = '', email = '', password = '', repeatPassword = '' }) =>
  nameValidation(name) ||
  emailValidation(email) ||
  passwordValidation(password) ||
  repeatPasswordValidation(password, repeatPassword);

export const signInValidation = ({ email = '', password = '' }) =>
  emailValidation(email) || passwordValidation(password);
