import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import StepsText from './StepsText/StepsText';

const HomeSteps = ({ stepsData }) => {
  const langToggle = useLanguage;

  return (
    <div className="page-wrapper">
      <section className="steps">
        <div className="steps__container">
          <div className="steps__content-wrapper">
            <div className="steps__content">
              <div className="steps__content-title">
                {langToggle(stepsData.title_ua, stepsData.title_ru, stepsData.title_en)}
              </div>
              <div className="steps__content-description">
                {langToggle(
                  stepsData.description_ua,
                  stepsData.description_ru,
                  stepsData.description_en,
                )}
              </div>
            </div>
          </div>
          <StepsText stepsData={stepsData.steps_info} />
        </div>
      </section>
    </div>
  );
};

HomeSteps.propTypes = {
  stepsData: PropTypes.object,
};

export default HomeSteps;
