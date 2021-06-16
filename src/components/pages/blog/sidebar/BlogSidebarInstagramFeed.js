/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import BlogSidebarHeader from './BlogSidebarHeader';
import blogSidebarInstagramFeedType from '../../../../types/components/pages/blog/sidebar/blogSidebarInstagramFeedType';

const BlogSidebarInstagramFeed = ({ items }) => {
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
      <BlogSidebarHeader heading="Follow Me" />

      <Slider {...sliderSettings}>
        {items.map(({ id, childImageSharp }) => (
          <div key={id} className="blog-sidebar-instagram-feed__item">
            <GatsbyImage
              image={childImageSharp.gatsbyImageData}
              alt="Instagram feed image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

BlogSidebarInstagramFeed.propTypes = {
  ...blogSidebarInstagramFeedType,
};

export default BlogSidebarInstagramFeed;
