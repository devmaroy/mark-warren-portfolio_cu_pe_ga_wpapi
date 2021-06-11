/* eslint-disable no-alert */
import React, { useState, useRef } from 'react';
import InfoBanner from '../../common/InfoBanner';
import Form from '../../common/form/Form';
import FormField from '../../common/form/FormField';
import getValidatedField from '../../../utils/validateForm';

const Newsletter = () => {
  const newsletterData = {
    heading: 'Let’s stay in touch',
    text: `<p>Tootsie roll sweet apple pie jelly-o donut muffin lemon drops. 
    Brownie gingerbread halvah cupcake jelly beans toffee cotton.</p>`,
    form: {
      placeholder: 'Email Address',
      buttonText: 'Subscribe',
      errorText: 'Please enter your valid email.',
    },
  };

  const initialState = useRef({
    email: '',
    error: '',
    valid: false,
  });

  const [newsletterFields, setNewsletterFields] = useState(
    () => initialState.current,
  );

  const handleChange = (name, value, type) => {
    const { isValid, errorText } = getValidatedField(
      name,
      value,
      type,
      newsletterData.form.errorText,
      true,
    );

    setNewsletterFields((prevState) => ({
      ...prevState,
      email: value,
      error: errorText,
      valid: isValid,
    }));
  };

  return (
    <section className="section newsletter">
      <div className="container">
        <div className="section__inner newsletter__inner">
          <InfoBanner
            heading={newsletterData.heading}
            text={newsletterData.text}
          >
            <Form
              name="contact"
              className="contact-form"
              buttonText={newsletterData.form.buttonText}
              buttonDisabled={false}
              buttonClassName="button--secondary"
              onSubmit={() => alert('Hello')}
            >
              <FormField
                type="email"
                id="email"
                name="email"
                placeholder={newsletterData.form.placeholder}
                value={newsletterFields.email}
                className="form-field__control--outline"
                onChange={handleChange}
                error={newsletterFields.error}
              />
            </Form>
          </InfoBanner>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
