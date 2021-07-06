/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import BlogSidebarHeader from './BlogSidebarHeader';
import InstagramFeedMock from '../../../common/InstagramFeedMock';
import blogSidebarInstagramFeedType from '../../../../types/components/pages/blog/sidebar/blogSidebarInstagramFeedType';

const BlogSidebarInstagramFeed = ({ heading }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
    arrows: false,
  };

  return (
    <div className="blog-sidebar__panel blog-sidebar-instagram-feed">
      <BlogSidebarHeader heading={heading} />

      <InstagramFeedMock>
        {(items) =>
          items && (
            <Slider {...sliderSettings}>
              {items.map(({ id, acf }) => (
                <div key={id} className="instagram-feed__item">
                  <GatsbyImage
                    image={acf.image.imageFile.childImageSharp.gatsbyImageData}
                    alt="Instagram feed image"
                  />
                </div>
              ))}
            </Slider>
          )
        }
      </InstagramFeedMock>
    </div>
  );
};

BlogSidebarInstagramFeed.propTypes = {
  ...blogSidebarInstagramFeedType,
};

export default BlogSidebarInstagramFeed;
