import { shape, string, bool } from 'prop-types';

// Contact Form Type
export default {
  formData: shape({
    contactFormFirstName: shape({
      contactFormFirstNameLabel: string.isRequired,
      contactFormFirstNameRequired: bool.isRequired,
    }).isRequired,
    contactFormLastName: shape({
      contactFormLastNameLabel: string.isRequired,
      contactFormLastNameRequired: bool.isRequired,
    }).isRequired,
    contactFormEmail: shape({
      contactFormEmailLabel: string.isRequired,
      contactFormEmailRequired: bool.isRequired,
    }).isRequired,
    contactFormSubject: shape({
      contactFormSubjectLabel: string.isRequired,
      contactFormSubjectRequired: bool.isRequired,
    }).isRequired,
    contactFormMessage: shape({
      contactFormMessageLabel: string.isRequired,
      contactFormMessageRequired: bool.isRequired,
    }).isRequired,
    contactFormButton: shape({
      contactFormButtonText: string.isRequired,
    }).isRequired,
    contactFormFieldErrorMessages: shape({
      contactFormFieldErrorMessagesFirstName: string.isRequired,
      contactFormFieldErrorMessagesLastName: string.isRequired,
      contactFormFieldErrorMessagesEmail: string.isRequired,
      contactFormFieldErrorMessagesSubject: string.isRequired,
      contactFormFieldErrorMessagesMessage: string.isRequired,
    }).isRequired,
    contactFormSubmitted: shape({
      contactFormSubmittedLoadingIcon: shape({
        altText: string.isRequired,
        sourceUrl: string.isRequired,
      }).isRequired,
      contactFormSubmittedMessages: shape({
        contactFormSubmittedMessagesError: shape({
          contactFormSubmittedMessagesErrorTitle: string.isRequired,
          contactFormSubmittedMessagesErrorText: string.isRequired,
          contactFormSubmittedMessagesErrorInfoText: string.isRequired,
          contactFormSubmittedMessagesErrorInfoTextLink: string.isRequired,
        }).isRequired,
        contactFormSubmittedMessagesSuccess: shape({
          contactFormSubmittedMessagesSuccessTitle: string.isRequired,
          contactFormSubmittedMessagesSuccessText: string.isRequired,
          contactFormSubmittedMessagesSuccessInfoText: string.isRequired,
          contactFormSubmittedMessagesSuccessInfoTextLink: string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
