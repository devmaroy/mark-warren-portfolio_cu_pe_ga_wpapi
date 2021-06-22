/* eslint-disable react/no-danger */
import React from 'react';
import contactFormInfoType from '../../../../types/components/sections/contact/contact-form/contactFormInfoType';

const ContactFormInfo = ({
  type = 'success',
  title,
  children,
  infoText,
  infoTextLink,
  handleReset,
}) => (
  <div className="contact-form-info">
    <h4
      className={`contact-form-info__title contact-form-info__title--${type}`}
    >
      {title}
    </h4>

    <div className="contact-form-info__content">
      {children && (
        <div
          className="contact-form-info__text"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      )}

      <div className="contact-form-info__meta">
        {infoText}{' '}
        <button
          type="button"
          onClick={handleReset}
          className="contact-form-info__link"
        >
          {infoTextLink}
        </button>
      </div>
    </div>
  </div>
);

ContactFormInfo.propTypes = {
  ...contactFormInfoType,
};

export default ContactFormInfo;
