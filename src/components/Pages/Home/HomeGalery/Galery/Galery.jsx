import React from 'react';
import LightBox from '../../../../Ui/LightBox/LightBox';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const Galery = () => {
  const galery = useStaticQuery(graphql`
    query allGalaryQuery {
      source: allFile(
        filter: { absolutePath: { regex: "/galery/" } }
        sort: { fields: [name], order: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const images = galery.source.nodes;

  const [showLightbox, setShowLightbox] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(0);

  function handleClick(e, index) {
    e.preventDefault();
    setShowLightbox(!showLightbox);
    setSelectedImage(index);
  }

  function closeModal() {
    setShowLightbox(false);
    setSelectedImage(0);
  }

  function goBack() {
    setSelectedImage(selectedImage - 1);
  }

  function goForward() {
    setSelectedImage(selectedImage + 1);
  }

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  function handleKeyUp(e) {
    e.preventDefault();
    const { keyCode } = e;
    if (showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (selectedImage > 0) {
          setSelectedImage(selectedImage - 1);
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (selectedImage < images.length - 1) {
          setSelectedImage(selectedImage + 1);
        }
      }
      if (keyCode === 27) {
        // Escape key
        setShowLightbox(false);
      }
    }
  }
  return (
    <div className="page__wrapper">
      <section className="Galery" data-scroll-section>
        {images.map((item, index) => {
          const image = getImage(item);
          return (
            <div className="Galery__slide" key={index}>
              <div
                className="Galery__wrapper"
                role="presentation"
                onClick={(e) => handleClick(e, index)}>
                <GatsbyImage className="Galery__image" image={image} alt="Galery image" loading="lazy" />
              </div>
            </div>
          );
        })}
      </section>
      {showLightbox && (
        <LightBox
          img={images[selectedImage].childImageSharp}
          closeModal={closeModal}
          goBack={goBack}
          goForward={goForward}
          selectedImage={selectedImage}
          images={images}
          showLightbox={showLightbox}
        />
      )}
    </div>
  );
};

Galery.propTypes = {
  images: PropTypes.array,
};

export default Galery;
