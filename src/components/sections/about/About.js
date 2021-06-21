import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../common/SectionHeader';
import AboutImage from './AboutImage';
import AboutInfo from './AboutInfo';

// API Query
const APIQuery = graphql`
  query SectionAboutQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        base: { eq: "about.jpg" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionAboutData = data.allFile.nodes[0];

  const aboutImage = {
    altText: 'Mark Warren portait',
    sourceUrl: 'sourceurl',
    imageFile: APISectionAboutData,
  };

  const aboutText = `
    <h2>Marshmallow fruitcake muffin candy tarts donut chocolate</h2>
    <p>Chocolate marshmallow sugar tootsie roll pie pastry cake dessert apple 
    pie gummies gingerbread sugar plum. Biscuit powder danish chocolate 
    cheesecake jujubes cheesecake chocolate brownie.</p>
    <p>Powder oat cake ice cream soufflé jelly-o macaroon sesame snaps candy 
    biscuit danis. Lollipop pudding gingerbread marshmallow marzipan cotton 
    candy sweet roll lollipop. Gingerbread bear claw wafer dragée jelly beans 
    macaroon bear.</p>
  `;

  const aboutTechnologies = [
    { id: '735b0c04-b712-4045-951d-9bc82cfa37b5', name: 'React' },
    { id: '51fcd399-fe80-45a3-b45f-927bde509645', name: 'NodeJS' },
    { id: '2cd2420d-6ad9-4c73-95ac-8d52bb7efc98', name: 'Express' },
    { id: '875eed85-29cb-4d98-8ab7-0ad700ca9555', name: 'MongoDB' },
  ];

  return (
    <section className="section about">
      <div className="container">
        <div className="section__inner about__inner">
          <SectionHeader heading="Just a Little" subHeading="About" />

          <div className="section__content about__content">
            <AboutImage image={aboutImage} />
            <AboutInfo text={aboutText} technologies={aboutTechnologies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
