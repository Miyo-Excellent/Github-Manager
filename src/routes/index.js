import { Page404 } from 'pages';
import Auth, { routes as authRoutes } from './auth';
import Dashboard, { routes as dashboardRoutes } from './dashboard';

const allRoutes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    exact: false,
    strict: true,
    sensitive: false,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    exact: false,
    strict: true,
    sensitive: false,
  },
  {
    // path: '',
    name: 'Page 404',
    component: Page404,
    exact: true,
    strict: true,
    sensitive: false,
  },
];

export default allRoutes;
export { allRoutes, authRoutes, Auth, dashboardRoutes, Dashboard };
