import _ from 'lodash';
import { ui } from 'redux/types';

const initialState = {
  isLoading: false,
  error: {
    code: '',
    message: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ui.setError: {
      return {
        ...state,
        error: _.isEmpty(action.payload) ? initialState.error : action.payload,
      };
    }

    case ui.removeError: {
      return {
        ...state,
        error: initialState.error,
      };
    }

    case ui.setLoadingState: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
