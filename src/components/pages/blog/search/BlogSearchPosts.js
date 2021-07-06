import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import BlogList from '../BlogList';
import blogSearchPostsType from '../../../../types/components/pages/blog/search/blogSearchPostsType';

const BlogSearchPosts = ({ hits, perPage }) => {
  const hasHits = hits && hits.length !== 0;

  // Check if we have hits
  if (hasHits) {
    return <BlogList posts={hits} />;
  }

  return <BlogList showDummy dummyAmount={perPage} />;
};

BlogSearchPosts.propTypes = {
  ...blogSearchPostsType,
};

const CustomBlogSearchPosts = connectHits(BlogSearchPosts);

export default CustomBlogSearchPosts;
