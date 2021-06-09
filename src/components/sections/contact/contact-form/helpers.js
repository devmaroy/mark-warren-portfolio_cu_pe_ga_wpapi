// Few helper functions for the Contact Form.
// We don't want to bloat the component too much.

import validator from 'validator';

export const getFormRequiredFields = (formData) => ({
  firstName: formData.contactFormFirstName.contactFormFirstNameRequired,
  lastName: formData.contactFormLastName.contactFormLastNameRequired,
  email: formData.contactFormEmail.contactFormEmailRequired,
  subject: formData.contactFormSubject.contactFormSubjectRequired,
  message: formData.contactFormMessage.contactFormMessageRequired,
});

export const getFormFieldErrorMessages = (messages) => ({
  firstName: messages.contactFormFieldErrorMessagesFirstName,
  lastName: messages.contactFormFieldErrorMessagesLastName,
  email: messages.contactFormFieldErrorMessagesEmail,
  subject: messages.contactFormFieldErrorMessagesSubject,
  message: messages.contactFormFieldErrorMessagesMessage,
});

export const getSubmittedErrorMessages = (messages) => ({
  title: messages.contactFormSubmittedMessagesErrorTitle,
  text: messages.contactFormSubmittedMessagesErrorText,
  infoText: messages.contactFormSubmittedMessagesErrorInfoText,
  infoTextLink: messages.contactFormSubmittedMessagesErrorInfoTextLink,
});

export const getSubmittedSuccessMessages = (messages) => ({
  title: messages.contactFormSubmittedMessagesSuccessTitle,
  text: messages.contactFormSubmittedMessagesSuccessText,
  infoText: messages.contactFormSubmittedMessagesSuccessInfoText,
  infoTextLink: messages.contactFormSubmittedMessagesSuccessInfoTextLink,
});

const getFormFieldData = (formData) => ({
  requiredFields: getFormRequiredFields(formData),
  errorMessages: getFormFieldErrorMessages(
    formData.contactFormFieldErrorMessages,
  ),
  submittedLoadingIcon:
    formData.contactFormSubmitted.contactFormSubmittedLoadingIcon,
  submittedErrorMessages: getSubmittedErrorMessages(
    formData.contactFormSubmitted.contactFormSubmittedMessages
      .contactFormSubmittedMessagesError,
  ),
  submittedSuccessMessages: getSubmittedSuccessMessages(
    formData.contactFormSubmitted.contactFormSubmittedMessages
      .contactFormSubmittedMessagesSuccess,
  ),
});

export const getValidatedField = (name, value, type, errorText, isRequired) => {
  const conditions = {
    text: value.length > 0,
    email: value.length > 0 && validator.isEmail(value),
    textarea: value.length > 0,
    checkbox: value === true,
  };

  if (!isRequired) {
    return { isValid: true, errorText: '' };
  }

  return {
    isValid: conditions[type],
    errorText: conditions[type] ? '' : errorText,
  };
};

export default getFormFieldData;
