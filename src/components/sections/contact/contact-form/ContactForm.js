import React, { useState, useRef } from 'react';
import URIEncode from '../../../../utils/URIEncode';
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

  // Required fields
  const requiredFields = {
    firstName: formData.firstName.required,
    lastName: formData.lastName.required,
    email: formData.emailAddress.required,
    subject: formData.subject.required,
    message: formData.message.required,
  };

  // Error messages
  const errorMessages = {
    firstName: formData.formFieldErrorMessages.firstName,
    lastName: formData.formFieldErrorMessages.lastName,
    email: formData.formFieldErrorMessages.emailAddress,
    subject: formData.formFieldErrorMessages.subject,
    message: formData.formFieldErrorMessages.message,
  };

  // Get data
  const { loadingIcon, messages } = formData.afterFormSubmit;

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

  // Render loading component
  if (loading) {
    return <ContactFormLoading loadingIcon={loadingIcon} />;
  }

  // Render error component
  if (error) {
    return (
      <ContactFormError
        messages={messages.error}
        type="error"
        handleReset={handleReset}
      />
    );
  }

  // Render success component
  if (success) {
    return (
      <ContactFormSuccess
        messages={messages.success}
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
        buttonText={formData.button.text}
        buttonDisabled={!fields.formValid}
        onSubmit={handleSubmit}
      >
        <div className="contact-form__layout">
          <FormField
            id="firstName"
            name="firstName"
            placeholder={formData.firstName.label}
            value={fields.firstName}
            onChange={handleChange}
            error={fields.errors && fields.errors.firstName}
          />
          <FormField
            id="lastName"
            name="lastName"
            placeholder={formData.lastName.label}
            value={fields.lastName}
            onChange={handleChange}
            error={fields.errors && fields.errors.lastName}
          />
          <FormField
            id="email"
            name="email"
            type="email"
            placeholder={formData.emailAddress.label}
            value={fields.email}
            onChange={handleChange}
            error={fields.errors && fields.errors.email}
          />

          <FormField
            id="subject"
            name="subject"
            placeholder={formData.subject.label}
            value={fields.subject}
            onChange={handleChange}
            error={fields.errors && fields.errors.subject}
          />
        </div>
        <FormField
          id="message"
          name="message"
          type="textarea"
          placeholder={formData.message.label}
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
