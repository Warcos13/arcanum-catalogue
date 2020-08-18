import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const isLoggedIn = true;

const PrivateRoute = ({ component: Component, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
