import React from 'react';
import blogSubHeadingType from '../../../types/components/pages/blog/blogSubHeadingType';

const BlogSubHeading = ({ heading, highlight }) => (
  <h5 className="blog-sub-heading">
    {heading} <span className="blog-sub-heading__highlight">{highlight}</span>
  </h5>
);

BlogSubHeading.propTypes = {
  ...blogSubHeadingType,
};

export default BlogSubHeading;
