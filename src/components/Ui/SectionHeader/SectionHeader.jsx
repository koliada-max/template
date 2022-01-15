import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ sectionCount, sectionDescription, sectionTitle }) => {
  return (
    <header className="section-header">
      <div className="section-header__wrapper">
        <div className="header__description-count">{sectionCount}</div>
        <div className="section-header__content">
          <div className="header__description">{sectionDescription}</div>
          <div className="header__title">{sectionTitle}</div>
        </div>
      </div>
    </header>
  );
};

SectionHeader.propTypes = {
  sectionCount: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
};

export default SectionHeader;
