import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import Logo from '../../../svg/logo.svg';
import HeaderLanguage from './HeaderLanguage/HeaderLanguage';
import HeaderContacts from './HeaderContacts/HeaderContacts';
import Burger from './Burger/Burger';
import HeaderOrder from './HeaderOrder/HeaderOrder';
import Navigation from './Navigation/Navigation';
import PropTypes from 'prop-types';

const Header = ({ navigationData }) => {
  const [open, setOpen] = React.useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }
  return (
    <>
      <div className="header-wrapper">
        <header className="header">
          <div className="header__container">
            <div className="header__logo">
              <Link to="/" className="header-logo__link header-logo__link-xl">
                <Logo className="header-logo" />
              </Link>
            </div>
            <div className="nav">
              <div className="nav__left">
                <HeaderLanguage />
                <HeaderContacts />
              </div>
              <div className="nav__right">
                <HeaderOrder />
                <Burger openMenu={openMenu} open={open} />
              </div>
            </div>
          </div>
        </header>
      </div>
      <Navigation open={open} closeMenu={closeMenu} navigationData={navigationData} />
    </>
  );
};

Header.propTypes = {
  navigationData: PropTypes.array,
};

export default Header;
