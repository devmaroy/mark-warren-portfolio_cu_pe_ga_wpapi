import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import heroImageType from '../../../types/components/sections/hero/heroImageType';

const HeroImage = ({ lg, xl }) => (
  <div className="hero-image">
    <div className="hero-image__lg">
      <GatsbyImage
        image={lg.imageFile.childImageSharp.gatsbyImageData}
        alt={lg.altText}
      />
    </div>

    <div className="hero-image__xl">
      <GatsbyImage
        image={xl.imageFile.childImageSharp.gatsbyImageData}
        alt={xl.altText}
      />
    </div>
  </div>
);

HeroImage.propTypes = {
  ...heroImageType,
};

export default HeroImage;
