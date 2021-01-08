import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useForm } from 'hooks';
import { Link, SignInContainer } from 'styled';
import { padding } from 'styles/GlobalStyle';

export default () => {
  const { values, handleInputChange, reset } = useForm({ email: '' });

  const { email = '' } = values;

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
            Forgot your password?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            defaultValue=""
            helperText="Entry your email address."
            error={email.length === 0}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <div style={{ marginBottom: padding / 3 }}>
            <Link to="/auth/sign-in">Do you have access? Go to sign in</Link>
          </div>

          <div>
            <Link to="/auth/sign-up">Don't have access? Create an account</Link>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Recover Password
          </Button>
        </Grid>
      </Grid>
    </SignInContainer>
  );
};
