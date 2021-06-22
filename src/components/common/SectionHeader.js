import React from 'react';
import sectionHeaderType from '../../types/components/common/sectionHeaderType';

const SectionHeader = ({ heading = 'Section', subHeading = 'Sub' }) => (
  <div className="section-header">
    <span className="section-header__subheading">{subHeading}</span>
    <h2 className="section-header__heading">{heading}</h2>
  </div>
);

SectionHeader.propTypes = {
  ...sectionHeaderType,
};

export default SectionHeader;
