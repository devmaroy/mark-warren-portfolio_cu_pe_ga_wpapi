/* eslint-disable react/no-danger */
import React from 'react';
import infoBannerType from '../../types/components/common/infoBannerType';

const InfoBanner = ({ heading, text, children }) => (
  <div className="info-banner">
    <h4
      className="info-banner__heading"
      dangerouslySetInnerHTML={{ __html: heading }}
    />

    <div
      className="info-banner__text"
      dangerouslySetInnerHTML={{ __html: text }}
    />

    <div className="info-banner__content">{children}</div>
  </div>
);

InfoBanner.propTypes = {
  ...infoBannerType,
};

export default InfoBanner;
