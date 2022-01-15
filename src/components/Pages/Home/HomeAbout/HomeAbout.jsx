import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import About from './About/About';

const HomeAbout = ({ aboutData }) => {
  const langToggle = useLanguage;
  return (
    <section className="page-wrapper" id="homeAbout">
      <SectionHeader
        sectionCount={'04.'}
        sectionDescription={langToggle(
          aboutData.description_ua,
          aboutData.description_ru,
          aboutData.description_en,
        )}
        sectionTitle={langToggle(aboutData.title_ua, aboutData.title_ru, aboutData.title_en)}
      />
      <About aboutData={aboutData} />
    </section>
  );
};

HomeAbout.propTypes = {
  aboutData: PropTypes.object,
};

export default HomeAbout;
