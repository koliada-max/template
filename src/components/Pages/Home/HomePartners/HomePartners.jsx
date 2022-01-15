import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import PartnersSlider from './PatnersSlider/PartnersSlider';

const HomePartners = ({ partnersData }) => {
  const langToggle = useLanguage;
  return (
    <section className="page-wrapper homePartners">
      <SectionHeader
        sectionCount={'05.'}
        sectionDescription={langToggle(
          partnersData.description_ua,
          partnersData.description_ru,
          partnersData.description_en,
        )}
        sectionTitle={langToggle(
          partnersData.title_ua,
          partnersData.title_ru,
          partnersData.title_en,
        )}
      />
      <PartnersSlider partnersData={partnersData} />
    </section>
  );
};

HomePartners.propTypes = {
  partnersData: PropTypes.object,
};

export default HomePartners;
