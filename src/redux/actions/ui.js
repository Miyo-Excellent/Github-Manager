import { ui } from 'redux/types';

export const setError = (error = {}) => ({
  type: ui.setError,
  payload: error,
});

export const setLoadingState = (loadingState = false) => ({
  type: ui.setLoadingState,
  payload: loadingState,
});

export const removeError = () => ({ type: ui.removeError });
