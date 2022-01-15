import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import { Link } from 'gatsby-plugin-react-i18next';
import 'slick-carousel/slick/slick.scss';
import PrewArrow from '../../../../../svg/arr-right.svg';
import NextArrow from '../../../../../svg/arr-left.svg';
import ArrowUp from '../../../../../svg/arrow_right_top.svg';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage';

const CatalogSlider = ({catalogData}) => {
  const catalogImages = useStaticQuery(graphql`
    query allCatalogQuery {
      source: allFile(filter: { absolutePath: { regex: "/catalog_slider/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const slides = catalogImages.source.nodes;
  const langToggle = useLanguage;

  const slider = React.createRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const counter = currentSlide + 3;

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
    slidesToShow: 3,
    slidesToScroll: 3,
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
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  return (
    <div className="order__slider-wrapper">
      <Slider ref={slider} {...settings} className={'catalog__slider'}>
        {slides.map((item, index) => {
          const image = getImage(item);
          console.log(item);
          return (
            <Link to="/product-card/" className="catalog__slide" key={index}>
              <div className="catalog__slide-wrapper">
                <div className="catalog__slide-image__wrapper">
                  <GatsbyImage
                    className="catalog__slide-image"
                    image={image}
                    alt="alt"
                    width="334px"
                    height="309px"
                    loading="lazy"
                  />
                </div>
                <div className="catalog__slide-footer">
                  <p className="catalog__slider-title">Title</p>
                  <span className="catalog__slider-price">12 000 ₴</span>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
      <div className="slider__button_wrapper">
        <div className="number-slider__counter">
          <div className="number-slider__counter-cover">
            <span className="number-slider__counter-current">
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
          <button className="order__button_order-button" aria-label="Order">
            <div className="button-content">
              <span className="order_button-text">
                {langToggle(catalogData.button_ua, catalogData.button_ru, catalogData.button_en)}
              </span>
              <ArrowUp className="up-catalog" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

CatalogSlider.propTypes = {
  catalogData: PropTypes.object,
};

export default CatalogSlider;
