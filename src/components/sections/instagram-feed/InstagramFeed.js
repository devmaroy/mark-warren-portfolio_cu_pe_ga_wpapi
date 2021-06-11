/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import SectionHeader from '../../common/SectionHeader';

// API Query
const APIQuery = graphql`
  query SectionInstagramFeedQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sections/instagram-feed" }
      }
      sort: { fields: base, order: ASC }
    ) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(width: 1200, quality: 100)
        }
      }
    }
  }
`;

const InstagramFeed = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionInstagramFeedData = data.allFile.nodes;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
  };

  return (
    <section className="section instagram-feed">
      <div className="section__inner instagram-feed__inner">
        <SectionHeader heading="Follow Me" subHeading="Instagram" />

        <div className="section__content">
          <Slider {...sliderSettings}>
            {APISectionInstagramFeedData.map(({ id, childImageSharp }) => (
              <div key={id} className="instagram-feed__item">
                <GatsbyImage
                  image={childImageSharp.gatsbyImageData}
                  alt="Portfolio image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
