import types from '../types/auth';
import { setError, setLoadingState } from './ui';
import { setUserData } from './profile';
import { firebase, googleAuthProvider } from 'firebase/setUp';

export const validUser = user => dispatch => {
  try {
    dispatch(setLoadingState(true));

    dispatch(setAccess(!_.isEmpty(user)));

    dispatch({ type: types.validUser });

    if (!_.isEmpty(user)) {
      const {
        displayName = '',
        uid = '',
        email = '',
        phoneNumber = '',
        photoURL = '',
        emailVerified = false,
        metadata = {},
      } = user;

      const { creationTime = '', lastSignInTime = '' } = metadata;

      const userData = {
        displayName,
        uid,
        email,
        phoneNumber,
        photoURL,
        emailVerified,
        creationTime,
        lastSignInTime,
      };

      dispatch(setUserData(userData));
    } else {
      dispatch(signOut());
    }

    dispatch(setLoadingState(false));
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};

export const signIn = ({ email = '', password = '' }, onFinish = (userData = {}) => null) => async dispatch => {
  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);

    dispatch(setUserData(user));

    await onFinish(user);
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};

export const signUp = (
  { name = '', email = '', password = '' },
  onFinish = (userData = {}) => null
) => async dispatch => {
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

    if (!!name) await user.updateProfile({ displayName: name });

    dispatch({ type: types.signUp });

    dispatch(setUserData(user));

    await onFinish(user);
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};

export const googleSignIn = (onFinish = (userData = {}) => null) => async dispatch => {
  try {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);

    dispatch({ type: types.googleSignIn });

    dispatch(setUserData(user));

    await onFinish(user);
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};

export const loadInitialData = () => async dispatch => {
  dispatch({
    type: types.loadInitialData,
    payload: {},
  });
};

export const signOut = () => async dispatch => {
  try {
    await firebase.auth().signOut();

    dispatch({ type: types.signOut });

    dispatch(setUserData({}));
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};

export const setAccess = (access = false) => async dispatch => {
  try {
    dispatch({ type: types.setAccess, payload: access });
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};

export const redirectToAuth = (path = '/auth') => async dispatch => {
  try {
    dispatch({ type: types.redirectToAuth(path) });
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};
