import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Nav, NavList, NavListItem } from 'styled';

const AppBar = withRouter(({ match, location, history, routes = [] }) => {
  const pathname = location.pathname || '/';

  const inAuthProcess = /auth/gi.test(pathname);

  const routesFiltered = (routes || []).filter(({ showInAppBar = false }) => !!showInAppBar);

  if (!!inAuthProcess || routesFiltered.length === 0) return null;

  return (
    <Nav>
      <NavList>
        {routesFiltered.map(({ name = '', path = '/' }, routeKey = 0) => {
          const isActive = pathname === path;

          return (
            <NavListItem key={routeKey.toString()} active={isActive} onClick={() => history.push(path)}>
              {name}
            </NavListItem>
          );
        })}
      </NavList>
    </Nav>
  );
});

AppBar.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default AppBar;
