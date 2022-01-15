import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import ArrUp from '../../../../svg/arrow_right_top-footer.svg';

const FooterLeft = ({ title, adressData }) => {
  const langToggle = useLanguage;

  return (
    <div className="footer-left footer__item">
      <div className="footer-left__wrapper">
        <div className="footer-left__title-container">
          <span className="footer-left__title">
            {langToggle(title.title_ua, title.title_ru, title.title_en)}
          </span>
        </div>
        <div className="adress-content">
          <div className="footer-left__adress-wrapper">
            <div className="footer-left__adress-content">
              <div className="button-map">
                <a href="https://goo.gl/maps/fzz3jn2F6KrfTRtb9" target="blank" className="map-link">
                  <div className="button-map__adress-top">
                    {langToggle(adressData.adress_ua, adressData.adress_ru, adressData.adress_en)}
                  </div>
                  <div className="button-map__adress">
                    {langToggle(adressData.map_ua, adressData.map_ru, adressData.map_en)}
                    <div className="arr">
                      <ArrUp className="arr-up" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-left__mail-container">
            <div className="footer-left__mail-item">
              <a href={'mailto:' + adressData.mail} className="footer-left__mail-link">
                <span className="footer-left__mail-link_title">
                  {langToggle(adressData.mail_ua, adressData.mail_ru, adressData.mail_en)}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterLeft.propTypes = {
  title: PropTypes.object,
  adressData: PropTypes.object,
};

export default FooterLeft;
