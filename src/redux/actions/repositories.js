import { repositories as types } from '../types';
import { setError } from './ui';
import { github } from 'services';

export const getUserRepos = (username = '') => async dispatch => {
  try {
    const repos = await github.getUserRepos(username, async error => dispatch(setError(error)));

    dispatch({
      type: types.getUserRepos,
      payload: repos,
    });
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};
