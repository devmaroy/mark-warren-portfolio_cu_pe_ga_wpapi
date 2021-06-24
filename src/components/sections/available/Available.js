import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../../common/Button';
import InfoBanner from '../../common/InfoBanner';

// API Query
const APIQuery = graphql`
  query SectionAvailableQuery {
    wpgraphql {
      sectionAvailable(id: "cG9zdDoxMDM=") {
        acf {
          heading
          text
          button {
            text
            url
            variant
          }
        }
      }
    }
  }
`;

const Available = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionAvailableData = data.wpgraphql.sectionAvailable;

  return (
    <section id="available" className="section available">
      <div className="container">
        <div className="section__inner available__inner">
          <InfoBanner
            heading={APISectionAvailableData.acf.heading}
            text={APISectionAvailableData.acf.text}
          >
            <Button
              size="lg"
              variant="secondary"
              to={APISectionAvailableData.acf.button.url}
              showIcon={false}
            >
              {APISectionAvailableData.acf.button.text}
            </Button>
          </InfoBanner>
        </div>
      </div>
    </section>
  );
};

export default Available;
