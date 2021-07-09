import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import contactImageType from '../../../types/components/sections/contact/contactImageType';

const ContactImage = ({ image }) => (
  <div className="contact-image">
    <div className="contact-image__wrapper">
      <GatsbyImage
        image={image.imageFile.childImageSharp.gatsbyImageData}
        alt={image.altText}
      />
    </div>
  </div>
);

ContactImage.propTypes = {
  ...contactImageType,
};

export default ContactImage;
