import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage'


const MainText = ({mainData}) => {
  
  const langToggle = useLanguage;

  return (
    <div className="home-main__text-section">
      <div className="text-section__count-wrapper">
        <p className="text-section__counts-data">2014</p>
        <p className="text-section__counts-text">
          {langToggle(mainData.top_ua, mainData.top_ru, mainData.top_en)}
        </p>
      </div>
      <div className="text-section__description-wrapper">
        <div className="text-section__description-wrapper_descr">
          <p className="text-section__description">
            {langToggle(mainData.description_ua, mainData.description_ru, mainData.description_en)}
          </p>
        </div>
        <div className="text-section__description-wrapper_title">
          <h1 className="text-section__title">
            {langToggle(mainData.title_ua, mainData.title_ru, mainData.title_en)}
          </h1>
        </div>
      </div>
    </div>
  );
};

MainText.propTypes = {
  mainData: PropTypes.object,
};

export default MainText;
