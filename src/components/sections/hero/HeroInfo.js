/* eslint-disable react/no-danger */
import React from 'react';
import Button from '../../common/Button';
import heroInfoType from '../../../types/components/sections/hero/heroInfoType';

const HeroInfo = ({ title, tagline, text, cta }) => (
  <div className="hero-info">
    <h1
      className="hero-info__heading"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <h3
      className="hero-info__tagline"
      dangerouslySetInnerHTML={{ __html: tagline }}
    />

    <div
      className="hero-info__text"
      dangerouslySetInnerHTML={{ __html: text }}
    />

    {cta && cta.length !== 0 && (
      <div className="hero-info-cta">
        {cta.map(({ text: ctaText, url: ctaUrl, variant: ctaVariant }) => (
          <div key={ctaUrl} className="hero-info-cta__item">
            <Button to={ctaUrl} variant={ctaVariant} showIcon={false}>
              {ctaText}
            </Button>
          </div>
        ))}
      </div>
    )}
  </div>
);

HeroInfo.propTypes = {
  ...heroInfoType,
};

export default HeroInfo;
