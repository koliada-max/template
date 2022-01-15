import React from 'react';
import PropTypes from 'prop-types';
import StickyBox from 'react-sticky-box';
import useLanguage from '../../../../../hooks/useLanguage';
import PlusWhite from '../../../../../svg/plus-white.svg';

const ProductCarOrder = ({
  productData,
  selectItem,
  increment,
  decrement,
  totalPrice,
  counter,
  openPopup,
}) => {
  const langToggle = useLanguage;

  const [active, setActive] = React.useState(null);

  

  return (
    <section className="product-order">
      <StickyBox offsetTop={110}>
        <div className="product-order__wrapper">
          <div className="product-order__code">
            <span className="product-order__code-num">{productData.code}</span>
          </div>
          <div className="product-order__title-wrapper">
            <h1 className="product-order__title">
              {langToggle(
                productData.title_ua,
                productData.title_ru,
                productData.title_en
              )}
            </h1>
          </div>
          <div className="product-order__modification-wrapper">
            <ul className="modification-list">
              {productData.modification.map((item, index) => {
                if (index === 0) {
                  return (
                    <li className="modification-item" key={index}>
                      <button
                        className="modification-item__button"
                        onClick={() => {
                          setActive(null);
                          selectItem(index);

                        }}
                      >
                        <span className="modification-title">{item.size}</span>
                        <span
                          className={
                            active === null
                              ? 'modification-checkbox active'
                              : 'modification-checkbox'
                          }
                        ></span>
                      </button>
                    </li>
                  );
                } else {
                  return (
                    <li className="modification-item" key={index}>
                      <button
                        className="modification-item__button"
                        onClick={() => {
                          setActive(index);
                          selectItem(index);
                        }}
                      >
                        <span className="modification-title">{item.size}</span>
                        <span
                          className={
                            active === index
                              ? 'modification-checkbox active'
                              : 'modification-checkbox'
                          }
                        ></span>
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="modification-price__wrapper">
            <div className="modification-price__count">
              <button className="button-minus" onClick={decrement}>
                -
              </button>
              <div className="total-count__wrapper">
                <span className="total-count">{counter}</span>
              </div>
              <button className="button-plus" onClick={increment}>
                +
              </button>
            </div>
            <div className="modification-price__total-price">
              <span className="total-price">{totalPrice + ' ₴'}</span>
            </div>
          </div>
          <div className="modification__button">
            <button className="button__modification-order" onClick={openPopup}>
              <span className="button__modification-order--title">
                {langToggle(
                  'Залишити заявку',
                  'Оставить заявку',
                  'Leave a request'
                )}
              </span>
              <PlusWhite className="button__modification-order--plus" />
            </button>
          </div>
        </div>
      </StickyBox>
    </section>
  );
};

ProductCarOrder.propTypes = {
  productData: PropTypes.object,
};

export default ProductCarOrder;
