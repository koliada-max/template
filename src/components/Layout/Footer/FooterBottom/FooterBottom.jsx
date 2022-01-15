import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import Nunox from '../../../../svg/nunox.svg';

const FooterTop = ({ links }) => {
  const langToggle = useLanguage;

  return (
    <div className="footer-bottom__end">
      <div className="footer-bottom__copy-container">
        {langToggle(links.copy_ua, links.copy_ru, links.copy_en)}
      </div>
      <div className="footer-bottom__nunox-container">
        <a href="https://nunox.co/" className="footer-bottom__nunox-link" target="blank">
          <Nunox />
        </a>
      </div>
    </div>
  );
};

FooterTop.propTypes = {
  links: PropTypes.object,
};

export default FooterTop;
