import React, { useState, useRef } from 'react';
import URIEncode from '../../../../utils/URIEncode';
import getFormFieldData from './helpers';
import getValidatedField from '../../../../utils/validateForm';
import Form from '../../../common/form/Form';
import FormField from '../../../common/form/FormField';
import ContactFormLoading from './ContactFormLoading';
import ContactFormError from './ContactFormError';
import ContactFormSuccess from './ContactFormSuccess';
import contactFormType from '../../../../types/components/sections/contact/contact-form/contactFormType';

const ContactForm = ({ formData }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialState = useRef({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    errors: {},
    valid: {
      firstName: false,
      lastName: false,
      email: false,
      message: false,
      subject: false,
    },
    formValid: false,
  });

  const [fields, setFields] = useState(() => initialState.current);

  // Get data
  const {
    requiredFields,
    errorMessages,
    submittedLoadingIcon,
    submittedErrorMessages,
    submittedSuccessMessages,
  } = getFormFieldData(formData);

  // Handle reseting state to the defaults
  const handleReset = () => {
    setFields(initialState.current);
    setSuccess(false);
    setLoading(false);
    setError(false);
  };

  // Submit data to the server
  const submitToMailServer = async (fieldsToSend) => {
    // setLoading(true);

    // TODO: Remove on production build
    // eslint-disable-next-line no-alert
    alert('Submitted successfuly!', fieldsToSend, URIEncode);

    // try {
    //   await fetch('/', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     body: URIEncode({ 'form-name': 'contact', ...fieldsToSend }),
    //   });

    //   setSuccess(true);
    //   setLoading(false);
    // } catch {
    //   setError(true);
    //   setLoading(false);
    // }
  };

  // Check if fields are ALL true Boolean values.
  const isFormValid = (fieldsToValidate) =>
    fieldsToValidate && Object.values(fieldsToValidate).every(Boolean);

  // Validate field
  const validateField = (name, value, type) => {
    const errors = { ...fields.errors };
    const valid = { ...fields.valid };

    // Check the field validation
    const { isValid, errorText } = getValidatedField(
      name,
      value,
      type,
      errorMessages[name],
      requiredFields[name],
    );

    // Update values
    valid[name] = isValid;
    errors[name] = errorText;

    // Set the updated values to the state
    setFields((prevState) => ({
      ...prevState,
      errors: { ...prevState.errors, ...errors },
      valid: { ...prevState.valid, ...valid },
      formValid: isFormValid(valid),
    }));
  };

  // Handle on change event
  const handleChange = (name, value, type) => {
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    validateField(name, value, type);
  };

  // Handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // For a sake of better sleep... we check again if form is valid
    if (isFormValid) {
      // Submit a request to netlify servers
      const { firstName, lastName, email, subject, message } = fields;
      submitToMailServer({ firstName, lastName, email, subject, message });
    }
  };

  if (loading) {
    return <ContactFormLoading loadingIcon={submittedLoadingIcon} />;
  }

  if (error) {
    return (
      <ContactFormError
        messages={submittedErrorMessages}
        type="error"
        handleReset={handleReset}
      />
    );
  }

  if (success) {
    return (
      <ContactFormSuccess
        messages={submittedSuccessMessages}
        type="success"
        handleReset={handleReset}
      />
    );
  }

  return (
    <>
      <form
        hidden
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="text" name="email" />
        <input type="text" name="subject" />
        <input type="text" name="message" />
      </form>

      <Form
        name="contact"
        className="contact-form"
        buttonText={formData.contactFormButton.contactFormButtonText}
        buttonDisabled={!fields.formValid}
        onSubmit={handleSubmit}
      >
        <FormField
          id="firstName"
          name="firstName"
          placeholder={formData.contactFormFirstName.contactFormFirstNameLabel}
          value={fields.firstName}
          onChange={handleChange}
          error={fields.errors && fields.errors.firstName}
        />
        <FormField
          id="lastName"
          name="lastName"
          placeholder={formData.contactFormLastName.contactFormLastNameLabel}
          value={fields.lastName}
          onChange={handleChange}
          error={fields.errors && fields.errors.lastName}
        />
        <FormField
          id="email"
          name="email"
          type="email"
          placeholder={formData.contactFormEmail.contactFormEmailLabel}
          value={fields.email}
          onChange={handleChange}
          error={fields.errors && fields.errors.email}
        />

        <FormField
          id="subject"
          name="subject"
          placeholder={formData.contactFormSubject.contactFormSubjectLabel}
          value={fields.subject}
          onChange={handleChange}
          error={fields.errors && fields.errors.subject}
        />
        <FormField
          id="message"
          name="message"
          type="textarea"
          placeholder={formData.contactFormMessage.contactFormMessageLabel}
          value={fields.message}
          onChange={handleChange}
          error={fields.errors && fields.errors.message}
        />
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  ...contactFormType,
};

export default ContactForm;
