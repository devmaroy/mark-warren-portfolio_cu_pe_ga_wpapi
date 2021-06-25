import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../common/SectionHeader';
import Card from '../../common/Card';

// API Query
const APIQuery = graphql`
  query SectionReviewsQuery {
    wpgraphql {
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
  const APISectionReviewsData = data.wpgraphql.sectionReviews.nodes;

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section__inner reviews__inner">
          <SectionHeader heading="What My Clients Say" subHeading="Reviews" />

          <div className="section__content">
            <div className="card__responsive-layout reviews__cards">
              {APISectionReviewsData.map(({ id, acf }) => (
                <Card
                  key={id}
                  icon={acf.icon}
                  iconSize="lg"
                  text={acf.text}
                  author={acf.author}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
