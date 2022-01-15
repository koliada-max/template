import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage';

const StepsText = ({ stepsData }) => {
  const langToggle = useLanguage;

  return (
    <div className="stepsText__text-section">
      {stepsData.map((item, index) => {
        const count = ++index;
        return (
          <div className="text-section__counts-wrapper first-step" key={index}>
            <div className="text-section__steps-data">{'0' + count + '.'}</div>
            <div className="text-section__count-text">
              {langToggle(item.title_ua, item.title_ru, item.title_en)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

StepsText.propTypes = {
  stepsData: PropTypes.array,
};

export default StepsText;
