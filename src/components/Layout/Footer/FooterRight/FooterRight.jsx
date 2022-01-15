import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import { Link } from 'gatsby-plugin-react-i18next';
import UpArrow from '../../../../svg/arr-up.svg';
import { scroller } from 'react-scroll';

const FooterRight = ({ title, links, navigationData }) => {
  const langToggle = useLanguage;

    function scrollToSection() {
      scroller.scrollTo('top-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }

  return (
    <div className="footer-right footer__item">
      <div className="footer-right__up">
        <button className="up__button" aria-label="scroll to Up" onClick={scrollToSection}>
          <div className="up__text">
            {langToggle(title.upButton_ua, title.upButton_ru, title.upButton_en)}
          </div>
          <div className="up__icon">
            <UpArrow className="up__icon-icon" />
          </div>
        </button>
      </div>
      <div className="footer-right__menu-wrapper">
        <div className="footer-right__menu-content">
          <ul className="footer-right__menu-item">
            {navigationData.map((item, index) => {
              return (
                <li className="footer-right__menu-liks" key={index}>
                  <Link to={item.slug} className="footer-right__menu-item">
                    {langToggle(item.title_ua, item.title_ru, item.title_en)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-right__confidentiality">
        <div className="confidentiality-container">
          <div className="footer-right__confidentiality-links">
            <Link to={links.link_confidentiality} className="link">
              {langToggle(
                links.confidentiality_ua,
                links.confidentiality_ru,
                links.confidentiality_en,
              )}
            </Link>
          </div>
          <div className="footer-right__contract-links">
            <Link to={links.link_contract} className="link">
              {langToggle(links.contract_ua, links.contract_ru, links.contract_en)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterRight.propTypes = {
  title: PropTypes.object,
  menuData: PropTypes.object,
  links: PropTypes.object,
  navigationData: PropTypes.array,
};

export default FooterRight;
