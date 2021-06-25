import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContactInfo from './ContactInfo';
import ContactForm from './contact-form/ContactForm';
import ContactImage from './ContactImage';

// API Query
const APIQuery = graphql`
  query SectionContactQuery {
    wpgraphql {
      sectionContact(id: "cG9zdDoxMjQ=") {
        id
        content
        acf {
          form {
            firstName {
              label
              required
            }
            lastName {
              label
              required
            }
            emailAddress {
              label
              required
            }
            subject {
              label
              required
            }
            message {
              label
              required
            }
            button {
              text
            }
            afterFormSubmit {
              loadingIcon {
                altText
                sourceUrl
              }
              messages {
                success {
                  title
                  text
                  infoText
                  infoTextLink
                }
                error {
                  title
                  text
                  infoText
                  infoTextLink
                }
              }
            }
            formFieldErrorMessages {
              firstName
              lastName
              emailAddress
              subject
              message
            }
          }
          image {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 1200, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`;

const Contact = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionContactData = data.wpgraphql.sectionContact;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__inner contact__inner">
          <div className="contact__wrapper">
            <ContactInfo text={APISectionContactData.content} />
            <ContactForm formData={APISectionContactData.acf.form} />
          </div>
          <ContactImage image={APISectionContactData.acf.image} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
