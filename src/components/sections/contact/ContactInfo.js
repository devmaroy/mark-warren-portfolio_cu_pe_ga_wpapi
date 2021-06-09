/* eslint-disable react/no-danger */
import React from 'react';
import contactInfoType from '../../../types/components/sections/contact/contactInfoType';

const ContactInfo = ({ text }) => (
  <div className="contact-info">
    <div
      className="contact-info__text text-basic"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);

ContactInfo.propTypes = {
  ...contactInfoType,
};

export default ContactInfo;
