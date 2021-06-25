/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import SectionHeader from '../../common/SectionHeader';
import InstagramFeedMock from '../../common/InstagramFeedMock';

const InstagramFeed = () => {
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
          <InstagramFeedMock>
            {(items) =>
              items && (
                <Slider {...sliderSettings}>
                  {items.map(({ id, acf }) => (
                    <div key={id} className="instagram-feed__item">
                      <GatsbyImage
                        image={
                          acf.image.imageFile.childImageSharp.gatsbyImageData
                        }
                        alt="Instagram feed image"
                      />
                      {console.log(items)}
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
