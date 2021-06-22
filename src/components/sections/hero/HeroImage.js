import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import heroImageType from '../../../types/components/sections/hero/heroImageType';

const HeroImage = ({ image }) => (
  <div className="hero-image">
    <div className="hero-image__lg">
      <GatsbyImage
        image={image.lg.imageFile.childImageSharp.gatsbyImageData}
        alt={image.lg.altText}
      />
    </div>

    <div className="hero-image__xl">
      <GatsbyImage
        image={image.xl.imageFile.childImageSharp.gatsbyImageData}
        alt={image.xl.altText}
      />
    </div>
  </div>
);

HeroImage.propTypes = {
  ...heroImageType,
};

export default HeroImage;
