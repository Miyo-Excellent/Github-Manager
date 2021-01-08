import types from '../types/profile';

export const setUserData = (userCredentials = {}) => {
  const {
    displayName: name = '',
    uid = '',
    email = '',
    phoneNumber = '',
    photoURL = '',
    emailVerified = false,
    metadata = {},
  } = userCredentials;

  const { creationTime = '', lastSignInTime = '' } = metadata;

  const payload = {
    displayName: name,
    uid,
    email,
    phoneNumber,
    photoURL,
    emailVerified,
    creationTime,
    lastSignInTime,
  };

  return {
    type: types.setUserData,
    payload,
  };
};
