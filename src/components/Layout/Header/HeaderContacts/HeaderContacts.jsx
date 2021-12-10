import React from 'react';
// import PropTypes from 'prop-types';

import HeadsPhones from '../../../../svg/headphones.svg';

const HeaderContacts = ({ open }) => {
  const dataContacts = { phone: '+38 (096) 275 76 98' };
  const telLink = dataContacts.phone.replace(/[- ()]/g, '');

  return (
    <div className="nav_phone">
      <a href={'tel:' + telLink} className="header__itm">
        <HeadsPhones className={open ? 'header-phone is-open' : 'header-phone'} />
      </a>
    </div>
  );
};

// HeaderContacts.propTypes = {};

export default HeaderContacts;
