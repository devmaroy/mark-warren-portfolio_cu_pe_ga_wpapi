import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SiteHeader from '../../common/SiteHeader';
import AboutImage from './AboutImage';
import AboutInfo from './AboutInfo';

// API Query
const APIQuery = graphql`
  query SectionAboutQuery {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          sections {
            about {
              heading
              subHeading
            }
          }
        }
      }
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
  const APISectionHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.sections.about;
  const APISectionAboutData = data.wpgraphql.sectionAbout;

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section__inner about__inner">
          <SiteHeader
            heading={APISectionHeadingsData.heading}
            subHeading={APISectionHeadingsData.subHeading}
          />

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
