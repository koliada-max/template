import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { gsap, Expo } from 'gsap';
import PropTypes from 'prop-types';
import CloseIcon from '../../../../../svg/close.svg';

const VideoModal = ({ stopReel, play, open, video }) => {
  const [tl] = React.useState(gsap.timeline({ paused: true }));

  let popUp = React.useRef(null);
  let white = React.useRef(null);
  let black = React.useRef(null);

  React.useEffect(() => {
    tl.to(popUp, 0.01, { pointerEvents: "auto", opacity: 1, ease: Expo.easeInOut })
      .to(popUp, 0.7, { y: 0, ease: Expo.easeInOut })
      .to(white, 1.8, { x: '-100%', ease: Expo.easeInOut })
      .to(black, 1.2, { x: '-100%', ease: Expo.easeInOut, delay: -0.5 })
      .reverse();
  }, [tl]);

  React.useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  return (
    <div
      className={!open ? 'video-modal' : 'video-modal is-open'}
      ref={(e) => (popUp = e)}
    >
      <div className="video-modal__wrapper">
        <div className="react-player__wrapper">
          {video ? (
            <ReactPlayer
              className="react-player"
              playing={play}
              controls={true}
              url={video}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { origin: 'http://localhost:8000' },
                },
              }}
            />
          ) : null}
          <div
            className="react-player__wrapper-black"
            ref={(e) => (black = e)}
          ></div>
          <div
            className="react-player__wrapper-white"
            ref={(e) => (white = e)}
          ></div>
        </div>
        <button className="popup-close__button" aria-label="Close" onClick={stopReel}>
          <span className="popup-close__button-icon">
            <CloseIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

VideoModal.propTypes = {
  stopReel: PropTypes.func,
  play: PropTypes.bool,
  open: PropTypes.bool,
  video: PropTypes.string
};

export default VideoModal;
