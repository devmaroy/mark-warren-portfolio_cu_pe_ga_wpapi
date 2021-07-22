import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SiteHeader from '../../common/SiteHeader';
import Card from '../../common/Card';

// API Query
const APIQuery = graphql`
  query SectionReviewsQuery {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          sections {
            reviews {
              heading
              subHeading
            }
          }
        }
      }
      sectionReviews {
        nodes {
          id
          acf {
            text
            icon {
              altText
              sourceUrl
            }
            author {
              image {
                id
                altText
                sourceUrl
              }
              name
              company
              position
            }
          }
        }
      }
    }
  }
`;

const Reviews = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.sections.reviews;
  const APISectionReviewsData = data.wpgraphql.sectionReviews.nodes;

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section__inner reviews__inner">
          <SiteHeader
            heading={APISectionHeadingsData.heading}
            subHeading={APISectionHeadingsData.subHeading}
          />

          <div className="section__content">
            <div className="card__responsive-layout reviews__cards">
              {APISectionReviewsData.map(({ id, acf }) => (
                <div key={id}>
                  <Card
                    icon={acf.icon}
                    iconSize="lg"
                    text={acf.text}
                    author={acf.author}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
