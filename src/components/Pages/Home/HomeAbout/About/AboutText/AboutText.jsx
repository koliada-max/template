import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../../hooks/useLanguage';

const AboutText = ({ aboutData }) => {
  const langToggle = useLanguage;

  return (
    <div className="aboutText__section">
          <div className="aboutText__section_text"> {aboutData.about_info.map((item, index) => {
              return (
                <div className="aboutText__section-item" key={index}>
                  <div className="aboutText__section_text-title">
                    {langToggle(item.marker_ua, item.marker_ru, item.marker_en)}
                  </div>
                  <div className="aboutText__section_text-description">
                    {langToggle(item.description_ua, item.description_ru, item.description_en)}
                  </div>
                </div>
              );
          }
      )}
      </div>
    </div>
  );
};

AboutText.propTypes = {
  aboutData: PropTypes.object,
};

export default AboutText;
