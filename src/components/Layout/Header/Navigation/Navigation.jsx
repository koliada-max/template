import React from 'react';
import { gsap, Expo } from 'gsap';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import useLanguage from '../../../../hooks/useLanguage';
import Arrow from '../../../../svg/arrow_right_top.svg';
import Logo from '../../../../svg/logo-nav.svg';
import PlusOrder from '../../../../svg/plus-wht.svg';
import CloseIcon from '../../../../svg/close.svg';

const Navigation = ({ open, closeMenu, navigationData }) => {
  const data = useStaticQuery(graphql`
    query {
      testImage: file(relativePath: { eq: "img.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.testImage.childImageSharp);
  const { languages, originalPath } = useI18next();
  const langToggle = useLanguage;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  let overlayElement = React.useRef(null);
  let navLink = React.useRef([]);
  let nav = React.useRef(null);
  let imageElement = React.useRef(null);
  let langElement = React.useRef(null);
  let buttonElement = React.useRef(null);


  React.useEffect(() => {
      tl.to(nav, 0.01, { pointerEvents: 'auto', opacity: 1, ease: Expo.easeInOut })
        .to(overlayElement, 0.01, { opacity: 1, ease: Expo.easeInOut })
        .to(overlayElement, 1.2, { y: '100%', ease: Expo.easeInOut })
        .to(nav, 1.2, { y: 0, ease: Expo.easeInOut })
        .to(imageElement, 1.2, {
          scale: 1,
          opacity: 1,
          ease: Expo.easeInOut,
          delay: -0.5,
        })
        .to(langElement, 0.8, { y: 0, opacity: 1, ease: Expo.easeInOut, delay: -0.5 })
        .staggerTo(
          navLink.current,
          0.8,
          { y: 0, opacity: 1, ease: Expo.easeInOut, delay: -0.35 },
          0.15,
        )
        .to(buttonElement, 0.8, { y: 0, opacity: 1, ease: Expo.easeInOut, delay: -0.5 })
        .reverse();
  }, [tl]);

  React.useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  return (
    <nav className={open ? "navigation is-open" : "navigation"} loading="lazy" ref={(e) => (nav = e)}>
      <div className="navigation__wrapper">
        <div className="overlay" ref={(e) => (overlayElement = e)}></div>
        <div className="navigation__header">
          <div className="navigation__header-logo">
            <Link to="/" className="header-logo__link header-logo__link-xl">
              <Logo className="header-logo" />
            </Link>
          </div>
          <div className="navigation__header-close">
            <button className="navigation__close navigation-close__link" aria-label="Close" onClick={closeMenu}>
              <span className="close__button-icon">
                <CloseIcon />
              </span>
            </button>
          </div>
        </div>
        <div className="navigation__menu-wrapper">
          <div className="navigation__image-section">
            <div className="navigation__content-cover--overflow" ref={(e) => (imageElement = e)}>
              <GatsbyImage className="navigation__image" image={image} alt="img" />
            </div>
          </div>
          <div className="navigation__menu-section">
            <div className="navigation__language">
              <ul className="navigation__language-list" ref={(e) => (langElement = e)}>
                {languages.map((lng) => (
                  <li key={lng} className="navigation__language-item">
                    <Link className="navigation__language-links" to={originalPath} language={lng}>
                      <span className="navigation__language-link">{lng}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="navigation__menu">
              {navigationData.map((item, index) => {
                const count = ++index;
                return (
                  <li
                    className="navigation__menu-item"
                    key={index}
                    ref={(e) => (navLink.current[item.id] = e)}>
                    <Link to={item.slug} className="menu__item-link" onClick={closeMenu}>
                      <div className="count-item">
                        <span className="menu__item-link_count">
                          {count <= 9 ? '0' + count + '.' : count + '.'}
                        </span>
                        <span className="menu__item-link_title">
                          {langToggle(item.title_ua, item.title_ru, item.title_en)}
                        </span>

                        <span className="navigation-link__icon">
                          <Arrow className="navigation-link__arrow" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="navigation__button-container">
              <button className="navigation__button" aria-label="Order" ref={(e) => (buttonElement = e)}>
                <span className="navigation__button-text">Замовити меблі</span>
                <PlusOrder className="plus-nav" />
              </button>
            </div>
          </div>
        </div>
        <div className="navigation__footer">
          <div className="navigation__footer-left"></div>
          <div className="navigation__footer-right"></div>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  navigationData: PropTypes.array,
  open: PropTypes.bool,
  orderData: PropTypes.object,
};

export default Navigation;
