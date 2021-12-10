import * as React from 'react';
import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
import Header from './Header/Header.jsx';

const Layout = ({ children }) => {

  return (
      <div className="app-container">
          <Header />
          <main>{children}</main>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
