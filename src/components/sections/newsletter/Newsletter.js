/* eslint-disable no-alert */
import React, { useState } from 'react';
import InfoBanner from '../../common/InfoBanner';
import Form from '../../common/form/Form';
import FormField from '../../common/form/FormField';

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
  const [email, setEmail] = useState('');

  const handleChange = (name, value) => {
    setEmail(value);
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
              name="newsletter"
              className="newsletter__form"
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
                value={email}
                className="form-field__control--outline"
                onChange={handleChange}
              />
            </Form>
          </InfoBanner>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
