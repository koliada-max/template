import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BenefitsText from './BenefitsText/BenefitsText';

const Benefits = ({ benefitsData }) => {
  const data = useStaticQuery(graphql`
    query {
      testImage: file(relativePath: { eq: "benefits.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.testImage.childImageSharp);

  return (
    <section className="Benefits">
      <div className="benefits__container">
        <div className="benefits__img-wrapper">
          <GatsbyImage className="benefits__image" image={image} alt="img" loading="lazy" />
        </div>
        <BenefitsText benefitsData={benefitsData} />
      </div>
    </section>
  );
};

Benefits.propTypes = {
  benefitsData: PropTypes.array,
};

export default Benefits;
