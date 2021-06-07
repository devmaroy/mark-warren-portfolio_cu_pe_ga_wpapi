import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import aboutImageType from '../../../types/components/sections/about/aboutImageType';

const AboutImage = ({ image }) => (
  <div className="about-image">
    <GatsbyImage
      image={image.imageFile.childImageSharp.gatsbyImageData}
      alt={image.altText}
    />
  </div>
);

AboutImage.propTypes = {
  ...aboutImageType,
};

export default AboutImage;
