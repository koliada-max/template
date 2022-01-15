import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import PrewArrow from '../../../../../svg/arr-right.svg';
import NextArrow from '../../../../../svg/arr-left.svg';
import ArrowUp from '../../../../../svg/arrow_right_top.svg';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage';

const PartnersSlider = ({ partnersData }) => {
  const partnersImages = useStaticQuery(graphql`
    query allPartnersQuery {
      source: allFile(filter: { absolutePath: { regex: "/partners_slider/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const slides = partnersImages.source.nodes;
  const langToggle = useLanguage;

  const slider = React.createRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const counter = currentSlide + 4;

  function handleAfterChange(index) {
    setCurrentSlide(index);
  }

  function SampleNextArrow() {
    return (
      <button
        aria-label="Next"
        className="slider-button slider-button__next"
        onClick={() => slider.current.slickNext()}>
        <PrewArrow className="slider-button__arrow wht" />
      </button>
    );
  }

  function SamplePrevArrow() {
    return (
      <button
        aria-label="Prev"
        className={'slider-button slider-button__prev'}
        onClick={() => slider.current.slickPrev()}>
        <NextArrow className="slider-button__arrow wht" />
      </button>
    );
  }

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 1199.98,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
    ],
  };

  return (
    <div className="partners__slider-wrapper">
      <Slider ref={slider} {...settings} className={'partners__slider'}>
        {slides.map((item, index) => {
          const image = getImage(item);
          return (
            <div className="partners__slide" key={index}>
              <div className="partners__slide-wrapper">
                <div className="partners__slide-image__wrapper">
                  <GatsbyImage
                    className="partners__slide-image"
                    image={image}
                    alt="alt"
                    width="245px"
                    height="135px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="slider__button_wrapper">
        <div className="number-slider__counter">
          <div className="number-slider__counter-cover">
            <span className="steps-slider__counter-current">
              {counter <= 9 ? '0' + counter : counter}
            </span>
            <span className="number-slider__counter-separator">/</span>
            <span className="number-slider__counter-total">
              {slides.length <= 9 ? '0' + slides.length : slides.length}
            </span>
          </div>
        </div>
        <div className="slider__button_arrow">
          <SamplePrevArrow className="slider__button_arow" />
          <SampleNextArrow className="slider__button_arow" />
        </div>
        <div className="slider__button_order-container">
          <button className="order__button_order-button" aria-label="Open">
            <div className="button-content">
              <span className="order_button-text">
                {langToggle(partnersData.button_ua, partnersData.button_ru, partnersData.button_en)}
              </span>
              <ArrowUp className="up-catalog" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

PartnersSlider.propTypes = {
  partnersData: PropTypes.object,
};

export default PartnersSlider;
