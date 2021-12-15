import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { PrivateLayout } from '../Layouts';

const PrivateRoute = ({ exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={() => <PrivateLayout><Component /></PrivateLayout>} />
);

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;