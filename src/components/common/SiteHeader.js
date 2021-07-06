import React from 'react';
import siteHeaderType from '../../types/components/common/siteHeaderType';

const SiteHeader = ({ heading = 'Section', subHeading = 'Sub' }) => (
  <div className="section-header">
    <span className="section-header__subheading">{subHeading}</span>
    <h2 className="section-header__heading">{heading}</h2>
  </div>
);

SiteHeader.propTypes = {
  ...siteHeaderType,
};

export default SiteHeader;
