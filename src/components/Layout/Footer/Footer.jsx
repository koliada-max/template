import React from 'react';
import PropTypes from 'prop-types';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterCenter from './FooterCenter/FooterCenter';
import FooterRight from './FooterRight/FooterRight';

const Footer = ({ dataContacts, dataFooter, navigationData }) => {
  return (
    <footer className="page-wrapper" id="footer">
      <div className="footer-main">
        <FooterLeft title={dataFooter.footer_title} adressData={dataContacts.adress} />
        <FooterCenter adressData={dataContacts.adress} socials={dataContacts.socials} />
        <FooterRight
          navigationData={navigationData}
          menuData={dataFooter.menu}
          links={dataFooter.links}
          title={dataFooter.footer_title}
        />
      </div>
      <FooterBottom links={dataFooter.links} />
    </footer>
  );
};

Footer.propTypes = {
  dataContacts: PropTypes.object,
  dataFooter: PropTypes.object,
  navigationData: PropTypes.array,
};

export default Footer;
