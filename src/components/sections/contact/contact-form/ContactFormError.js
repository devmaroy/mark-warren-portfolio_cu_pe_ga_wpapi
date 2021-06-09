import React from 'react';
import ContactFormInfo from './ContactFormInfo';
import contactFormErrorType from '../../../../types/components/sections/contact/contact-form/contactFormErrorType';

const ContactFormError = ({ type, messages, handleReset }) => (
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

ContactFormError.propTypes = { ...contactFormErrorType };

export default ContactFormError;
