import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'hooks';
import { Link, SignInContainer } from 'styled';
import { auth } from 'redux/actions';
import { emailValidation, passwordValidation, signInValidation } from 'utils/validations';
import { padding } from 'styles/GlobalStyle';
import { redirectToAuth } from '../redux/actions/auth';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();

  const { access = false } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { values, handleInputChange, reset } = useForm({
    email: '',
    password: '',
  });

  const { email = '', password = '' } = values;

  const goToHome = userData => {
    const path = '/';

    dispatch(redirectToAuth(path));

    history.replace(path);
  };

  const handleSignIn = ({ target }) => {
    dispatch(auth.signIn({ email, password }, goToHome));
  };

  const handleGoogleSignIn = ({ target }) => {
    dispatch(auth.googleSignIn(goToHome));
  };

  return (
    <SignInContainer>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        component="form"
        spacing={2}
        style={{ width: 300 }}
      >
        <Grid item xs={12} style={{ marginBottom: padding }}>
          <Typography variant="h2" component="h2" style={{ fontSize: '2.5rem' }}>
            Login
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            defaultValue=""
            helperText="Entry your email address."
            error={emailValidation(email)}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="password"
            label="Password"
            defaultValue=""
            helperText="Enter your password, it must be 8 or more characters."
            type="password"
            error={passwordValidation(password)}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{ marginBottom: padding / 3 }}>
            <Link to="/auth/sign-up">Don't have access? Create an account</Link>
          </div>

          <div>
            <Link to="/auth/forgotten-password">Do you need to validate your account?</Link>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignIn}
            style={{ marginBottom: padding / 2 }}
            disabled={signInValidation({ email, password })}
          >
            Sign in
          </Button>

          <Button variant="contained" color="secondary" fullWidth onClick={handleGoogleSignIn}>
            Sign in with Google
          </Button>
        </Grid>
      </Grid>
    </SignInContainer>
  );
};
