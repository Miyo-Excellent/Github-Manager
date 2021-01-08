import { auth } from 'redux/types';

const initialState = {
  access: false,
  /*
    uid: '1190ajifasjbakñcf',
    name: 'Michell Excellent',
  */
};

export default (state = initialState, action) => {
  switch (action.type) {
    case auth.setAccess: {
      return { ...state, access: action.payload };
    }

    case auth.signIn: {
      return state;
    }

    case auth.loadInitialData: {
      return state;
    }

    case auth.signOut: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
