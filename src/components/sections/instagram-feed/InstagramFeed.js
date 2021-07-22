/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import SiteHeader from '../../common/SiteHeader';
import InstagramFeedMock from '../../common/InstagramFeedMock';

// API Query
const APIQuery = graphql`
  query SectionInstagramFeedQuery {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          sections {
            instagram {
              heading
              subHeading
            }
          }
        }
      }
    }
  }
`;

const InstagramFeed = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.sections
      .instagram;

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
        <SiteHeader
          heading={APISectionHeadingsData.heading}
          subHeading={APISectionHeadingsData.subHeading}
        />

        <div className="section__content">
          <InstagramFeedMock>
            {(items) =>
              items && (
                <Slider {...sliderSettings}>
                  {items.map(({ id, acf }) => (
                    <div key={id} className="instagram-feed__item">
                      {acf.link ? (
                        <a href={acf.link}>
                          <GatsbyImage
                            image={
                              acf.image.imageFile.childImageSharp
                                .gatsbyImageData
                            }
                            alt={acf.image.altText}
                          />
                        </a>
                      ) : (
                        <GatsbyImage
                          image={
                            acf.image.imageFile.childImageSharp.gatsbyImageData
                          }
                          alt={acf.image.altText}
                        />
                      )}
                    </div>
                  ))}
                </Slider>
              )
            }
          </InstagramFeedMock>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
