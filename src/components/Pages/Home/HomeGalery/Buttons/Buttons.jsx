import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage';
import ArrowUp from '../../../../../svg/arrow_right_top-white.svg';
import PlusWhite from '../../../../../svg/plus-white.svg';

const Buttons = ({ galeryData }) => {
  const langToggle = useLanguage;
  return (
    <div className="buttons__wrapper">
      <div className="buttons__catalog-wrapper">
        <button className="buttons__catalog-button" aria-label="Open">
          <p className="buttons__catalog-button_text">
            {langToggle(
              galeryData.catalogButton_ua,
              galeryData.catalogButton_ru,
              galeryData.catalogButton_en,
            )}
          </p>
          <ArrowUp className="arrowUp" />
        </button>
      </div>
      <div className="buttons__order-wrapper">
        <button className="buttons__order-button" aria-label="Order">
          <p className="buttons__order-button_text">
            {langToggle(
              galeryData.orderButton_ua,
              galeryData.orderButton_ru,
              galeryData.orderButton_en,
            )}
          </p>
          <PlusWhite className="plusWhite" />
        </button>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  galeryData: PropTypes.object,
};

export default Buttons;
