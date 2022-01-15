import * as React from 'react';
import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { navigationData } from '../../db/navigationData';
import { contactsData } from '../../db/contactsData';
import { footerData } from '../../db/footerData';

const Layout = ({ children }) => {

  return (
      <div className="app-container">
          <Header navigationData={navigationData}/>
          <main>{children}</main>
          <Footer dataContacts={contactsData} dataFooter={footerData} navigationData={navigationData} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
