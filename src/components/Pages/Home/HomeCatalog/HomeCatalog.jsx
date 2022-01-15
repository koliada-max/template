import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import CatalogSlider from './CatalogSlider/CatalogSlider';

const HomeCatalog = ({ catalogData }) => {
  const langToggle = useLanguage;
  return (
    <section className="page-wrapper" id="homeCatalog">
      <SectionHeader
        sectionCount={'03.'}
        sectionDescription={langToggle(
          catalogData.description_ua,
          catalogData.description_ru,
          catalogData.description_en,
        )}
        sectionTitle={langToggle(catalogData.title_ua, catalogData.title_ru, catalogData.title_en)}
      />
      <CatalogSlider catalogData={catalogData} />
    </section>
  );
};

HomeCatalog.propTypes = {
  catalogData: PropTypes.object,
};

export default HomeCatalog;
