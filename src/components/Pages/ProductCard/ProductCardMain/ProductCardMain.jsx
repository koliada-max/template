import React from 'react';
import PropTypes from 'prop-types';
import ProductCardOrder from './ProductCardOrder/ProductCardOrder';
import ProductCardSlider from './ProductCardSlider/ProductCardSlider';
import useLanguage from '../../../../hooks/useLanguage';

const ProductCardMain = ({ productData }) => {
  const langToggle = useLanguage;
  const [current, setCurrent] = React.useState(0);
  const [counter, setCounter] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  function openPopup(){
    setOpen(true);
  };

  function closePopup(){
    setOpen(false);
  };

  function selectItem(index) {
    setCurrent(index);
  };

  const price = productData.main_info.modification[current].price;

  function increment() {
    setCounter(counter + 1)
  };

  function decrement() {
    setCounter(counter  === 1 ? counter : counter - 1)
  };


  const totalPrice = price * counter;
  const size = productData.main_info.modification[current].size;

  const result = {
    code: productData.main_info.code,
    title: langToggle(
      productData.main_info.title_ua,
      productData.main_info.title_ru,
      productData.main_info.title_en
    ),
    size: size,
    number: counter,
    price: totalPrice,
  }

  console.log(result);
  return (
    <>
      <section className="product-main top-section">
        <div className="page-wrapper">
          <div className="product-main__container">
            <ProductCardSlider images={productData.main_images} />
            <ProductCardOrder 
            productData={productData.main_info} selectItem={selectItem} 
            increment={increment} decrement={decrement} totalPrice={totalPrice} counter={counter} openPopup={openPopup}
            />
          </div>
        </div>
      </section>
      {/* <div className="form-popap"></div> */}
    </>
  );
};

ProductCardMain.propTypes = {
  productData: PropTypes.object,
};

export default ProductCardMain;
