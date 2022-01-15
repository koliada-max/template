import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MainText from './MainText/MainText';

const HomeMain = ({mainData}) => {
  const data = useStaticQuery(graphql`
    query {
      testImage: file(relativePath: { eq: "img.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const image = getImage(data.testImage.childImageSharp);

  return (
    <section className="home-main top-section" id="home-main">
      <div className="page-wrapper">
        <div className="home-main__container">
          <MainText mainData={mainData} />
          <div className="home-main__image-section">
            <div className="image-section__wrapper">
              <GatsbyImage className="home-main__image" image={image} alt="img" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
