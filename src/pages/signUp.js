import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from 'redux/actions';
import { redirectToAuth } from 'redux/actions/auth';
import { useForm } from 'hooks';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  repeatPasswordValidation,
  signUpValidation,
} from 'utils/validations';
import { Link, SignInContainer } from 'styled';
import { padding } from 'styles/GlobalStyle';

export default () => {
  const history = useHistory();

  const { access = false } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { values, handleInputChange, reset } = useForm({
    email: '',
    name: '',
    password: '',
    repeatPassword: '',
  });

  const goToHome = userData => {
    const path = '/';

    dispatch(redirectToAuth(path));

    history.replace(path);
  };

  const { email = '', name = '', password = '', repeatPassword = '' } = values;

  const handleSignUp = ({ target }) => {
    dispatch(auth.signUp({ password, email, name }, goToHome));
  };

  const handleGoogleSignUp = ({ target }) => {
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
            Register
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            type="text"
            defaultValue=""
            helperText="Entry your name & lastname."
            error={nameValidation(name)}
            onChange={handleInputChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            defaultValue=""
            helperText="Entry your email address."
            error={emailValidation(email)}
            onChange={handleInputChange}
            required
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
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="repeatPassword"
            label="Confirm Password"
            defaultValue=""
            helperText="Confirm your password, it must be the same as the previous password."
            type="password"
            error={repeatPasswordValidation(password, repeatPassword)}
            onChange={handleInputChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Link to="/auth/sign-in">Do you have access? Go to sign in</Link>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: padding / 2 }}
            onClick={handleSignUp}
            disabled={signUpValidation({
              repeatPassword,
              password,
              email,
              name,
            })}
          >
            Sign Up
          </Button>

          <Button variant="contained" color="secondary" fullWidth onClick={handleGoogleSignUp}>
            Sign up with Google
          </Button>
        </Grid>
      </Grid>
    </SignInContainer>
  );
};
