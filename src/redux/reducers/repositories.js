import { repositories as types } from 'redux/types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.getUserRepos: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
