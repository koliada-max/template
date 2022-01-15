import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import NextArrow from '../../../../../svg/arr-left.svg';
import PrewArrow from '../../../../../svg/arr-right.svg';
import PlusOrder from '../../../../../svg/plus_order.svg';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage';

const OrderSlider = ({ orderData }) => {
  const orderImages = useStaticQuery(graphql`
    query allOrderQuery {
      source: allFile(filter: { absolutePath: { regex: "/order_slider/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const langToggle = useLanguage;
  const slides = orderImages.source.nodes;

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
      <Slider ref={slider} {...settings} className={'order__slider'}>
        {slides.map((item, index) => {
          const image = getImage(item);
          return (
            <div className="order__slide" key={index}>
              <div className="order__slide-wrapper">
                <div className="order__slide-image_wrapper">
                  <GatsbyImage
                    className="order__slide-image"
                    image={image}
                    alt="alt"
                    width="334px"
                    height="309px"
                    loading="lazy"
                  />
                </div>
                <div className="order__slide-footer">
                  <p className="order__slider-title">Title so very big and nice title, are you like it? do you want more?</p>
                </div>
              </div>
            </div>
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
          <SamplePrevArrow className="slider__button_arow button-prev slider-button___prev" />
          <SampleNextArrow className="slider__button_arow button-next" />
        </div>
        <div className="slider__button_order-container">
          <button className="order__button_order-button" aria-label="Open">
            <div className="button-content">
              <span className="order_button-text">
                {langToggle(orderData.button_ua, orderData.button_ru, orderData.button_en)}
              </span>
              <PlusOrder className="plus-order" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

OrderSlider.propTypes = {
  orderData: PropTypes.object,
};

export default OrderSlider;
