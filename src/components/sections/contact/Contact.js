import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContactInfo from './ContactInfo';
import ContactForm from './contact-form/ContactForm';
import ContactImage from './ContactImage';
import loadingIcon from '../../../images/icons/spinner.svg';

// API Query
const APIQuery = graphql`
  query SectionContactQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        base: { eq: "contact.jpg" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 1200, quality: 100)
        }
      }
    }
  }
`;

const Contact = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionContactData = data.allFile.nodes[0];

  const contactInfoData = {
    text: `<h2>Sugar pie gingerbread sugar plum biscuit tootsie oat cake</h2>
    <p>Toffee gummies pie macaroon sweet. Tiramisu carrot jelly beans candy 
    canes. Donut carrot chocolate cheesecake cheesecake ice brownie sugar plum 
    donut.</p>`,
  };

  const contactFormData = {
    contactFormFirstName: {
      contactFormFirstNameLabel: 'First name *',
      contactFormFirstNameRequired: true,
    },
    contactFormLastName: {
      contactFormLastNameLabel: 'Last name',
      contactFormLastNameRequired: false,
    },
    contactFormEmail: {
      contactFormEmailLabel: 'Email address *',
      contactFormEmailRequired: true,
    },
    contactFormSubject: {
      contactFormSubjectLabel: 'Subject *',
      contactFormSubjectRequired: true,
    },
    contactFormMessage: {
      contactFormMessageLabel: 'Message *',
      contactFormMessageRequired: true,
    },
    contactFormButton: {
      contactFormButtonText: 'Send',
    },
    contactFormSubmitted: {
      contactFormSubmittedLoadingIcon: {
        altText: 'Loading icon',
        sourceUrl: loadingIcon,
      },
      contactFormSubmittedMessages: {
        contactFormSubmittedMessagesSuccess: {
          contactFormSubmittedMessagesSuccessTitle:
            'You have successfully sent me a message. Thank you!',
          contactFormSubmittedMessagesSuccessText:
            'I will reply to your message as soon as possible.',
          contactFormSubmittedMessagesSuccessInfoText:
            'If you want to send me an another message,',
          contactFormSubmittedMessagesSuccessInfoTextLink: 'click here!',
        },
        contactFormSubmittedMessagesError: {
          contactFormSubmittedMessagesErrorTitle:
            'Oops, sorry! Something went wrong...',
          contactFormSubmittedMessagesErrorText: '',
          contactFormSubmittedMessagesErrorInfoTextLink: 'try again',
          contactFormSubmittedMessagesErrorInfoText:
            'Please wait a little bit and',
        },
      },
    },
    contactFormFieldErrorMessages: {
      contactFormFieldErrorMessagesFirstName: 'Please provide your first name.',
      contactFormFieldErrorMessagesLastName: 'Please provide your last name.',
      contactFormFieldErrorMessagesEmail: 'Please enter your valid email.',
      contactFormFieldErrorMessagesSubject: 'Please enter subject.',
      contactFormFieldErrorMessagesMessage: 'Please enter your message.',
    },
  };

  const contactImage = {
    altText: 'Mark Warren portait',
    sourceUrl: 'sourceurl',
    imageFile: APISectionContactData,
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__inner contact__inner">
          <div className="contact__wrapper">
            <ContactInfo text={contactInfoData.text} />
            <ContactForm formData={contactFormData} />
          </div>
          <ContactImage image={contactImage} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
