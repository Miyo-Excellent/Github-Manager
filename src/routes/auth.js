import React from 'react';
import { Redirect } from 'react-router-dom';
import { Navigator } from 'navigation';
import { ForgottenPassword, SignIn, SignUp } from 'pages';

const prefix = '/auth';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
    exact: true,
    strict: true,
    // sensitive: false,
    showInAppBar: false,
  },
  {
    path: `${prefix}/sign-in`,
    name: 'SignIn',
    component: SignIn,
    // exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: false,
  },
  {
    path: `${prefix}/forgotten-password`,
    name: 'ForgottenPassword',
    component: ForgottenPassword,
    // exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: false,
  },
  {
    path: `${prefix}/sign-up`,
    name: 'SignUp',
    component: SignUp,
    // exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: false,
  },
  {
    // path: '',
    name: 'Page 404',
    component: () => <Redirect to={`${prefix}/sign-in`} />,
    exact: true,
    // strict: true,
    // sensitive: false,
    showInAppBar: false,
  },
];

export { routes };
export default () => <Navigator routes={routes} />;
