import { shape, string, bool } from 'prop-types';

// Contact Form Type
export default {
  formData: shape({
    firstName: shape({
      label: string.isRequired,
      required: bool,
    }).isRequired,
    lastName: shape({
      label: string.isRequired,
      required: bool,
    }).isRequired,
    emailAddress: shape({
      label: string.isRequired,
      required: bool,
    }).isRequired,
    subject: shape({
      label: string.isRequired,
      required: bool,
    }).isRequired,
    message: shape({
      label: string.isRequired,
      required: bool,
    }).isRequired,
    button: shape({
      text: string.isRequired,
    }).isRequired,
    afterFormSubmit: shape({
      loadingIcon: shape({
        altText: string.isRequired,
        sourceUrl: string.isRequired,
      }).isRequired,
      messages: shape({
        error: shape({
          title: string.isRequired,
          text: string.isRequired,
          infoText: string.isRequired,
          infoTextLink: string.isRequired,
        }).isRequired,
        success: shape({
          title: string.isRequired,
          text: string.isRequired,
          infoText: string.isRequired,
          infoTextLink: string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    formFieldErrorMessages: shape({
      firstName: string.isRequired,
      lastName: string.isRequired,
      emailAddress: string.isRequired,
      subject: string.isRequired,
      message: string.isRequired,
    }).isRequired,
  }).isRequired,
};
