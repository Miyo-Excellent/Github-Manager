import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from './redux/actions/ui';

export default ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const { error } = useSelector(state => state.ui);

  // const { access = false } = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (!!error && !!error.message) {
      enqueueSnackbar(error.message, { variant: 'error' });

      dispatch(setError({}));
    }
  }, [error]);

  return children;
};
