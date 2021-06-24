import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../common/SectionHeader';
import AboutImage from './AboutImage';
import AboutInfo from './AboutInfo';

// API Query
const APIQuery = graphql`
  query SectionAboutQuery {
    wpgraphql {
      sectionAbout(id: "cG9zdDo0Nw==") {
        content
        acf {
          technologies {
            heading
            list {
              name
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

const About = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionAboutData = data.wpgraphql.sectionAbout;

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section__inner about__inner">
          <SectionHeader heading="Just a Little" subHeading="About" />

          <div className="section__content about__content">
            <AboutImage image={APISectionAboutData.acf.image} />
            <AboutInfo
              text={APISectionAboutData.content}
              technologies={APISectionAboutData.acf.technologies}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
