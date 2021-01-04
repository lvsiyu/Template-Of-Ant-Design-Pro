import React from 'react';
import PropTypes from 'prop-types';
import { Inspector } from 'react-dev-inspector';

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

const Layout = ({ children }) => {
  return <InspectorWrapper>{children}</InspectorWrapper>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
