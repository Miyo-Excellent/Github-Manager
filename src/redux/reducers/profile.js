import { profile } from 'redux/types';

const initialState = {
  user: {
    uid: '',
    name: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    emailVerified: false,
    creationTime: '',
    lastSignInTime: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case profile.setUserData: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
