import React from 'react';
import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'redux/actions';
import { PageContainer } from 'styled';
import { redirectToAuth } from '../redux/actions/auth';
import { padding } from 'styles/GlobalStyle';

export default () => {
  const history = useHistory();

  const { user = {} } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const goToHome = () => {
    const path = '/';

    dispatch(redirectToAuth(path));

    history.replace(path);
  };

  const handleSignOut = ({ target }) => {
    dispatch(auth.signOut());
    goToHome();
  };

  return (
    <PageContainer component="section">
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid container item xs={12}>
          {!!user.photoURL && (
            <Grid container item alignItems="center" justify="center" style={{ marginBottom: padding / 2 }}>
              <Avatar alt="User avatar" src={user.photoURL} style={{ width: 100, height: 100 }} />
            </Grid>
          )}

          {!!user.displayName && (
            <Grid container item alignItems="center" justify="center" style={{ marginBottom: padding / 2 }}>
              <Typography
                variant="h1"
                component="h2"
                style={{
                  textAlign: 'center',
                  fontSize: '2rem',
                  fontWeight: 600,
                }}
              >
                {user.displayName}
              </Typography>
            </Grid>
          )}

          {!!user.email && (
            <Grid container item alignItems="center" justify="center" style={{ marginBottom: padding / 2 }}>
              <Typography
                variant="h1"
                component="h2"
                style={{
                  textAlign: 'center',
                  fontSize: '1.3rem',
                }}
              >
                {user.email}
              </Typography>
            </Grid>
          )}
        </Grid>

        <Grid container xs={12} alignItems="center" justify="center" style={{ marginBottom: padding / 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignOut}
            style={{ margin: 'auto', display: 'block' }}
          >
            Sign Out
          </Button>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
