/* eslint-disable no-alert */
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import InfoBanner from '../../common/InfoBanner';
import Form from '../../common/form/Form';
import FormField from '../../common/form/FormField';

// API Query
const APIQuery = graphql`
  query SectionNewsletterQuery {
    wpgraphql {
      sectionNewsletter(id: "cG9zdDoyMTM=") {
        acf {
          heading
          text
          form {
            emailAddress {
              label
            }
            button {
              text
            }
          }
        }
      }
    }
  }
`;

const Newsletter = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionNewsletterData = data.wpgraphql.sectionNewsletter;

  const [email, setEmail] = useState('');

  const handleChange = (name, value) => {
    setEmail(value);
  };

  return (
    <section id="newsletter" className="section newsletter">
      <div className="container">
        <div className="section__inner newsletter__inner">
          <InfoBanner
            heading={APISectionNewsletterData.acf.heading}
            text={APISectionNewsletterData.acf.text}
          >
            <Form
              name="newsletter"
              className="form--2cols newsletter__form"
              buttonText={APISectionNewsletterData.acf.form.button.text}
              buttonDisabled={false}
              buttonClassName="button--secondary button--lg"
              onSubmit={() => alert('Hello')}
            >
              <FormField
                type="email"
                id="email"
                name="email"
                placeholder={
                  APISectionNewsletterData.acf.form.emailAddress.label
                }
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
