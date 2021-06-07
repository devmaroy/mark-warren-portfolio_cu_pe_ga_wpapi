import React from 'react';

const SectionHeader = ({ heading = 'Section', subHeading = 'Sub' }) => (
  <div className="section-header">
    <span className="section-header__subheading">{subHeading}</span>
    <h2 className="section-header__heading">{heading}</h2>
  </div>
);

export default SectionHeader;
