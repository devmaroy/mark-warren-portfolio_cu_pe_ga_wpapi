/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import BlogPostTeaser from './post/BlogPostTeaser';
import dummyPostTeaserImg from '../../../images/blog/skeleton-screen-post-teaser.svg';
import blogListType from '../../../types/components/pages/blog/blogListType';

const BlogList = ({ posts, showDummy, showDummyAmount = 3 }) => (
  <div className={classNames('blog-list', { 'blog-list--dummy': showDummy })}>
    {showDummy
      ? Array.from({ length: showDummyAmount }).map((_, i) => (
          <img
            key={i}
            src={dummyPostTeaserImg}
            alt="Dummy post preview"
            className="blog-list__item blog-post-teaser blog-post-teaser--large"
          />
        ))
      : posts.map((post) => <BlogPostTeaser key={post.id} post={post} large />)}
  </div>
);

BlogList.propTypes = {
  ...blogListType,
};

export default BlogList;
