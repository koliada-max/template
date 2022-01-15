import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useLanguage from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PlayWhite from '../../../../svg/play.svg';
import VideoModal from './VideoModal/VideoModal';

const HomeVideoSection = ({ videoData }) => {
  const data = useStaticQuery(graphql`
    query {
      sub: file(relativePath: { eq: "video.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const [open, setOpen] = React.useState(false);
  const [play, setPlay] = React.useState(false);

  function playReel(e) {
    e.preventDefault();
    setOpen(true);
    setTimeout(() => {
      setPlay((play) => true);
    }, 3000);
  }

  function stopReel() {
    setOpen(false);
    setPlay(false);
  }

  const imageSub = getImage(data.sub);
  const langToggle = useLanguage;

  return (
    <>
      <section className="page-wrapper">
        <div className="homeVideo">
          <div className="homeVideo__wrapper" onClick={playReel} role="presentation">
            <div className="video-cover__wrapper-overflow">
              <div className="homeVideo__image-container">
                <GatsbyImage
                  image={imageSub}
                  alt={langToggle('Обкладинка', 'Обложка', 'Cover')}
                  className="homeVideo__image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="homeVideo__button-container">
              <button href="/" className="button-video" aria-label="Play">
                <div className="play-container">
                  <PlayWhite className="play-icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <VideoModal stopReel={stopReel} play={play} open={open} video={videoData.video} />
    </>
  );
};

HomeVideoSection.propTypes = {
  videoData: PropTypes.object,
};

export default HomeVideoSection;
