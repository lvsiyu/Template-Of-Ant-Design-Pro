import { Redirect, Route } from 'umi';
import PropTypes from 'prop-types';
import React from 'react';
import Authorized from './Authorized';

const AuthorizedRoute = ({ component: Component, render, authority, redirectPath, ...rest }) => (
  <Authorized
    authority={authority}
    noMatch={
      <Route
        {...rest}
        render={() => (
          <Redirect
            to={{
              pathname: redirectPath,
            }}
          />
        )}
      />
    }
  >
    <Route {...rest} render={(props) => (Component ? <Component {...props} /> : render(props))} />
  </Authorized>
);

export default AuthorizedRoute;

AuthorizedRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.any,
  authority: PropTypes.any,
  redirectPath: PropTypes.any,
};
