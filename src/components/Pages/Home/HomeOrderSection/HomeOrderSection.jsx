import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import OrderSlider from './OrderSlider/OrderSlider';

const HomeOrderSection = ({ orderData }) => {
  const langToggle = useLanguage;
  return (
    <section className="home-order page-wrapper" id="homeOrder">
      <SectionHeader
        sectionCount={'01.'}
        sectionDescription={langToggle(
          orderData.description_ua,
          orderData.description_ru,
          orderData.description_en,
        )}
        sectionTitle={langToggle(orderData.title_ua, orderData.title_ru, orderData.title_en)}
      />
      <OrderSlider orderData={orderData} />
    </section>
  );
};

HomeOrderSection.propTypes = {
  orderData: PropTypes.object,
};

export default HomeOrderSection;
