/* eslint-disable react/no-danger */
import React from 'react';
import blogPostContentType from '../../../../types/components/pages/blog/post/blogPostContentType';

const BlogPostContent = ({ content }) => (
  <div className="blog-post-content">
    <div
      className="text-full blog-post-content__text"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

BlogPostContent.propTypes = {
  ...blogPostContentType,
};

export default BlogPostContent;
