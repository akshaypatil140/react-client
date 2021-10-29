import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { AuthLayout } from '../Layouts';

const AuthRoute = (props) => {
  const { exact, path, component: Component } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={
        () => <AuthLayout><Component /></AuthLayout>
      }
    />
  );
};

AuthRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default AuthRoute;
