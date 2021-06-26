import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../common/SectionHeader';
import Card from '../../common/Card';

// API Query
const APIQuery = graphql`
  query SectionServicesQuery {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          sections {
            services {
              heading
              subHeading
            }
          }
        }
      }
      sectionServices(where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          acf {
            heading
            text
            icon {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const Services = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.sections
      .services;
  const APISectionServicesData = data.wpgraphql.sectionServices.nodes;

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__inner services__inner">
          <SectionHeader
            heading={APISectionHeadingsData.heading}
            subHeading={APISectionHeadingsData.subHeading}
          />

          <div className="section__content">
            <div className="card__responsive-layout services__cards">
              {APISectionServicesData.map(({ id, acf }, i) => (
                <Card
                  key={id}
                  number={i + 1}
                  icon={acf.icon}
                  heading={acf.heading}
                  text={acf.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
