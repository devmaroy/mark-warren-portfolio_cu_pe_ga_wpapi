import React from 'react';
import contactFormLoadingType from '../../../../types/components/sections/contact/contact-form/contactFormLoadingType';

const ContactFormLoading = ({ loadingIcon }) => (
  <div className="contact-form-loading">
    <img src={loadingIcon.sourceUrl} alt={loadingIcon.altText} />
  </div>
);

ContactFormLoading.propTypes = {
  ...contactFormLoadingType,
};

export default ContactFormLoading;
