/* eslint-disable react/no-danger */
import React from 'react';
import BlogPostsRecent from '../BlogPostsRecent';
import blogPostRecentArticlesType from '../../../../types/components/pages/blog/post/blogPostRecentArticlesType';

const BlogPostRecentArticles = ({ heading }) => (
  <div className="blog-post-recent-articles">
    <h3
      className="blog-post-recent-articles__heading"
      dangerouslySetInnerHTML={{ __html: heading }}
    />

    <BlogPostsRecent />
  </div>
);

BlogPostRecentArticles.propTypes = {
  ...blogPostRecentArticlesType,
};

export default BlogPostRecentArticles;
