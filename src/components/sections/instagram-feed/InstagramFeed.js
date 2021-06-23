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
        relativeDirectory: { eq: "instagram-feed/items" }
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
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="instagram-feed" className="section instagram-feed">
      <div className="section__inner instagram-feed__inner">
        <SectionHeader heading="Follow Me" subHeading="Instagram" />

        <div className="section__content">
          <Slider {...sliderSettings}>
            {APISectionInstagramFeedData.map(({ id, childImageSharp }) => (
              <div key={id} className="instagram-feed__item">
                <GatsbyImage
                  image={childImageSharp.gatsbyImageData}
                  alt="Instagram feed image"
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
