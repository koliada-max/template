import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../../hooks/useLanguage';

const BenefitsText = ({ benefitsData }) => {
  const langToggle = useLanguage;

  return (
    <div className="benefitText__text-section">
          {benefitsData.map((item, index) => {
              const count = ++index
              return (
                <div className="text-section__counts-wrapper" key={index}>
                  <div className="text-section__count-data">{"0" + count + "."}</div>
                  <div className="text-section__count-text">
                    {langToggle(
                      item.title_ua,
                      item.title_ru,
                      item.title_en,
                    )}
                  </div>
                </div>
              );
      })}
    </div>
  );
};

BenefitsText.propTypes = {
  benefitsData: PropTypes.array,
};

export default BenefitsText;
