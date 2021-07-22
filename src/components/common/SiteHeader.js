/* eslint-disable react/no-danger */
import React from 'react';
import siteHeaderType from '../../types/components/common/siteHeaderType';

const SiteHeader = ({ heading = 'Site', subHeading = 'Sub' }) => (
  <div className="site-header">
    <span
      className="site-header__subheading"
      dangerouslySetInnerHTML={{ __html: subHeading }}
    />
    <h2
      className="site-header__heading"
      dangerouslySetInnerHTML={{ __html: heading }}
    />
  </div>
);

SiteHeader.propTypes = {
  ...siteHeaderType,
};

export default SiteHeader;
