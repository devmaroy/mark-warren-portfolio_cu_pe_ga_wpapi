import React from 'react';
import ContactFormInfo from './ContactFormInfo';
import contactFormSuccessType from '../../../../types/components/sections/contact/contact-form/contactFormSuccessType';

const ContactFormSuccess = ({ type, messages, handleReset }) => (
  <ContactFormInfo
    type={type}
    title={messages.title}
    infoText={messages.infoText}
    infoTextLink={messages.infoTextLink}
    handleReset={handleReset}
  >
    {messages.text && messages.text}
  </ContactFormInfo>
);

ContactFormSuccess.propTypes = { ...contactFormSuccessType };

export default ContactFormSuccess;
