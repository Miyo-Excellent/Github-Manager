import React, { createRef } from 'react';
import { IconButton } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Close as CloseIcon } from '@material-ui/icons';

import Notify from './notify';
import Auth from './auth';
import { custom as theme } from 'theme';
import GlobalStyle from 'styles/GlobalStyle';

import 'styles/global.scss';

const Configuration = ({ children }) => {
  const notifyRef = createRef();

  const onDismissNotify = key => () => notifyRef.current.closeSnackbar(key);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalStyle />

      <SnackbarProvider
        preventDuplicate
        dense
        hideIconVariant
        ref={notifyRef}
        maxSnack={4}
        action={key => (
          <IconButton onClick={onDismissNotify(key)} style={{ background: 'white', padding: 5 }}>
            <CloseIcon style={{ color: 'red', fontSize: 25 }} />
          </IconButton>
        )}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        iconVariant={{
          success: '✅  ',
          error: '✖️',
          warning: '⚠️',
          info: 'ℹ️',
        }}
      >
        <Notify>
          <Router>
            <Auth />

            {children}
          </Router>
        </Notify>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

Configuration.propTypes = {};

export default Configuration;
