import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import Benefits from './Benefits/Benefits';

const HomeBenefitsSection = ({ benefitsData }) => {
  const langToggle = useLanguage;
  return (
    <section className="page-wrapper">
      <SectionHeader
        sectionCount={'02.'}
        sectionDescription={langToggle(
          benefitsData.description_ua,
          benefitsData.description_ru,
          benefitsData.description_en,
        )}
        sectionTitle={langToggle(
          benefitsData.title_ua,
          benefitsData.title_ru,
          benefitsData.title_en,
        )}
      />
      <Benefits benefitsData={benefitsData.benefits} />
    </section>
  );
};

HomeBenefitsSection.propTypes = {
  benefitsData: PropTypes.object,
};

export default HomeBenefitsSection;
