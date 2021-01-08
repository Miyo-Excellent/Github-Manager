import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { redirectToAuth, validUser } from 'redux/actions/auth';
import { firebase } from './firebase';
import { setLoadingState } from './redux/actions/ui';
import { Redirect } from 'react-router';

export default () => {
  const { access = false } = useSelector(state => state.auth);

  const [checking, setChecking] = useState(false);

  const dispatch = useDispatch();

  // const handleCloseBackdrop = () => setChecking(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      dispatch(validUser(user));

      setTimeout(() => setChecking(true), 1000);
    });
  }, []);

  if (!checking)
    return (
      <Backdrop open={!checking} style={{ zIndex: 9999 }}>
        <CircularProgress style={{ color: 'white' }} />
      </Backdrop>
    );

  if (!!checking && !access) {
    const path = '/auth/sign-in';

    dispatch(redirectToAuth(path));

    return <Redirect to={path} />;
  }

  return null;
};
