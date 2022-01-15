import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';

const ProductCardSlider = ({ images }) => {
  const productgallery = useStaticQuery(graphql`
    query allProductQuery {
      source: allFile(filter: { absolutePath: { regex: "/product_card/" } }
      sort: { fields: [name], order: ASC }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `);

  const slides = productgallery.source.nodes;

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    draggable: false,
    speed: 750,
    cssEase: 'cubic-bezier(0.24, 0.4, 0, 1)',
    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick',
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = React.useRef(null);
  return (
    <div className="product-gallery__slider-wrapper">
      <Slider ref={slider} {...settings} className="product-gallery__slider">
        {slides.map((item, index) => {
          const image = getImage(item.childImageSharp);
          return (
            <div className="product-slide__item-wrapper" key={index}>
              <GatsbyImage
                className="product-slide__item-image"
                image={image}
                alt="chair Ricchezza furniture"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

ProductCardSlider.propTypes = {
  images: PropTypes.array,
};

export default ProductCardSlider;
