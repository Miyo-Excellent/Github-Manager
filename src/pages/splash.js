import React from 'react';
import { Redirect } from 'react-router';

const Splash = ({}) => {
  return <Redirect to="/repositories" />;
};

Splash.propTypes = {};

export default Splash;
