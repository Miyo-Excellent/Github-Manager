import React from 'react';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';

const Navigator = ({ routes = [] }) => (
  <Switch>
    {(routes || []).map((route = {}, routeKey) => (
      <Route key={routeKey.toString()} {...route} />
    ))}
  </Switch>
);

Navigator.propTypes = {
  routes: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Navigator;
