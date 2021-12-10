import React from 'react';
// import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';

import OrderIcon from '../../../../svg/plus_order.svg';

const HeaderOrder = () => {
  const langToggle = useLanguage;

  return (
    <div className="nav_order">
      <button className="modal-order">
        <span className="header-order__title">
          {langToggle('Замовити меблі', 'Заказать мебель', 'Order furniture')}
        </span>
        <OrderIcon className="header-order__icon" />
      </button>
    </div>
  );
};

// HeaderOrder.propTypes = {};

export default HeaderOrder;


