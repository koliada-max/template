import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useLanguage from '../../../../../hooks/useLanguage';
import AboutText from './AboutText/AboutText';

const About = ({ aboutData }) => {
  const data = useStaticQuery(graphql`
    query {
      testImage: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.testImage.childImageSharp);
  const langToggle = useLanguage;
    
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__img-wrapper">
          <GatsbyImage className="about__image" image={image} alt="img" />
          <div className="about__image-text">
            <div className="about__image-text_title">
              {langToggle(
                aboutData.image_info.title_ua,
                aboutData.image_info.title_ru,
                aboutData.image_info.title_en,
              )}
            </div>
            <div className="about__image-text_description">
              {langToggle(
                aboutData.image_info.description_ua,
                aboutData.image_info.description_ru,
                aboutData.image_info.description_en,
              )}
            </div>
          </div>
        </div>
        <AboutText aboutData={aboutData} />
      </div>
    </section>
  );
};

About.propTypes = {
  aboutData: PropTypes.object,
};

export default About;
