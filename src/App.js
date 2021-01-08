import React from 'react';
import { Provider } from 'react-redux';

import { Navigator } from 'navigation';
import { AppBar, MainLayout } from 'components';
import routes, { dashboardRoutes } from 'routes';
import Configuration from 'configuration';
import { store } from './redux';

import 'react-calendar/dist/Calendar.css';

import 'fontsource-roboto';

export default () => (
  <Provider store={store}>
    <Configuration>
      <MainLayout component="main">
        <AppBar routes={dashboardRoutes} />

        <Navigator routes={routes} />
      </MainLayout>
    </Configuration>
  </Provider>
);
