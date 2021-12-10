import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import WaveFirst from '../../../../svg/wave_first.svg';
import WaveSecond from '../../../../svg/wave_second.svg';
import Plus from '../../../../svg/plus.svg';
import Dots from '../../../../svg/dots.svg';

const HomeMainScreen = ({ mainData }) => {
  const firstSlider = useStaticQuery(graphql`
    {
      source: allFile(filter: { absolutePath: { regex: "/firstSlider/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const images = firstSlider.source.nodes;

  const slider = React.createRef();

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => {
      console.log(dots);
      return (
        <ul className="dots__container">
          {dots.map((dot) => {
            const li = React.cloneElement(dot, {
              children: (
                <span>
                  {dot.props.children}
                  <Dots className="svg" />
                </span>
              ),
            });
            return li;
          })}
        </ul>
      );
    },
  };

  const langToggle = useLanguage;

  return (
    <section id="top-section" className="home-main">
      <div className="home-main__wrapper">
        <div className="home-main__center">
          <article className="home-main__content">
            <div className="home-main__button">
              <button className="home-main__btn">
                {langToggle(mainData.button_ua, mainData.button_ru)}
              </button>
            </div>
            <h1>{langToggle(mainData.title_ua, mainData.title_ru)}</h1>
          </article>
          <article className="home-main__img-container">
            <div className="firstSlider">
              <Slider ref={slider} {...settings} className={'firstSlider__slider'}>
                {images.map((item, index) => {
                  const image = getImage(item);
                  return (
                    <div className="firstSlider__wrapper" key={index}>
                      <div className="firstSlider__wrapper-content">
                        <GatsbyImage
                          className="firstSlider__image"
                          image={image}
                          alt="slide image"
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </article>
        </div>
        <div className="button">
          <button className="button__order">
            <div className="header-phone">
              <span className="button__order-content">
                <span className="menu__button-title">
                  {langToggle(mainData.order_ua, mainData.order_ru)}
                </span>
              </span>
            </div>
            <div className="menu_touch">
              <WaveFirst className="menu_first" />
              <WaveSecond className="menu_vol2" />
              <Plus className="button__plus" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

HomeMainScreen.propTypes = {
  mainData: PropTypes.object,
};

export default HomeMainScreen;
