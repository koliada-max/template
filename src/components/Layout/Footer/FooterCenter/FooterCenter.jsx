import React from 'react';
import PropTypes from 'prop-types';
import Instsgram from '../../../../svg/instagram.svg';
import Pinterest from '../../../../svg/pinterest.svg';
import Facebook from '../../../../svg/facebook.svg';
import Telegram from '../../../../svg/telegram.svg';
import Viber from '../../../../svg/viber.svg';
import Whatsapp from '../../../../svg/whatsapp.svg';

const FooterCenter = ({ adressData, socials }) => {
  

  return (
    <div className="footer-center footer__item footer__item-center">
      <div className="footer-center__social-top footer-left__title-container footer__social">
        <div className="social-center__instagramm hover-class">
          <a href={socials.instagramm} target="blank" className="social-center__instagramm-link">
            <Instsgram className="social-center__instagramm-icon" />
            <span className="in-text">Instsgram</span>
          </a>
        </div>
        <div className="social-center__pinterest hover-class">
          <a href={socials.pinterest} target="blank" className="social-center__pinterest-link">
            <Pinterest className="social-center__pinterest-icon" />
            <span className="in-text">Pinterest</span>
          </a>
        </div>
        <div className="social-center__facebook hover-class">
          <a href={socials.facebook} target="blank" className="social-center__facebook-link">
            <Facebook className="social-center__facebook-icon" />
            <span className="in-text">Facebook</span>
          </a>
        </div>
      </div>
      <div className="footer-center__fones-wrapper footer__phones">
        <div className="footer-center__fones-content">
          <a
            href={`tel:` + adressData.phone_1.replace(/[- )(]/g, '')}
            className="footer-center__contacts-item_link">
            <span className="footer-center__contacts-item_link-title">{adressData.phone_1}</span>
          </a>
        </div>
        <div className="footer-center__fones-content">
          <a
            href={`tel:` + adressData.phone_2.replace(/[- )(]/g, '')}
            className="footer-center__contacts-item__link">
            <span className="footer-center__contacts-item_link-title">{adressData.phone_2}</span>
          </a>
        </div>
        <div className="footer-center__fones-content">
          <a
            href={`tel:` + adressData.phone_3.replace(/[- )(]/g, '')}
            className="footer-center__contacts-item__link">
            <span className="footer-center__contacts-item_link-title">{adressData.phone_3}</span>
          </a>
        </div>
      </div>

      <div className="footer-center__social-bottom footer__messangers">
        <div className="social-center__telegram hover-class">
          <a href={socials.telegram} target="blank" className="social-center__telegram-link">
            <Telegram className="social-__telegram-icon" />
            <span className="in-text">Telegram</span>
          </a>
        </div>
        <div className="social-center__viber hover-class">
          <a href={socials.viber} target="blank" className="social-bottom__viber-link">
            <Viber className="social-__viber-icon" />
            <span className="in-text">Viber</span>
          </a>
        </div>
        <div className="social-center__whatsapp hover-class">
          <a href={socials.whatsapp} target="blank" className="social-center__whatsapp-link">
            <Whatsapp className="social-__whatsapp-icon" />
            <span className="in-text">Whatsapp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

FooterCenter.propTypes = {
  adressData: PropTypes.object,
  socials: PropTypes.object,
};

export default FooterCenter;
