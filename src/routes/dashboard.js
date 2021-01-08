import React from 'react';
import { Navigator } from 'navigation';
import { Calendar, Page404, Profile, Repositories, Splash } from 'pages';

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash,
    exact: true,
    strict: true,
    sensitive: false,
    showInAppBar: false,
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repositories,
    // exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: true,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    // exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    // exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: true,
  },
  {
    // path: '',
    name: 'Page 404',
    component: Page404,
    exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: false,
  },
];

export { routes };
export default () => <Navigator routes={routes} />;
