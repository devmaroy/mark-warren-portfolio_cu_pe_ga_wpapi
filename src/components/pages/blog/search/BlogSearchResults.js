/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import BlogList from '../BlogList';
import blogSearchResultsType from '../../../../types/components/pages/blog/search/blogSearchResultsType';

// We need to check if we are searching for something.
// That means that the query is running so we want to have a loading indicator.
//
// If query searching is DONE then we need to check if we have hits..  //
// If we have hits, we want to show them otherwise we want to display error.

const BlogSearchResults = ({
  isSearchStalled,
  hits,
  loadingIcon,
  notFoundMessage,
  buttonText,
}) => {
  const [loading, setLoading] = useState(true);
  const hasHits = hits && hits.length !== 0;

  useEffect(() => {
    // Check if we searching for something.
    if (!isSearchStalled) {
      setLoading(false);
    }
  }, [isSearchStalled]);

  // Check if we are still searching for items.
  if (loading) {
    return (
      <div className="blog-search-results blog-search-results--loading">
        <img src={loadingIcon.sourceUrl} alt={loadingIcon.altText} />
      </div>
    );
  }

  // Check if we searched for something but we have nothing to show.
  if (!hasHits && !loading) {
    return <div className="blog-search-results">{notFoundMessage}</div>;
  }

  // So we have results. Show them.
  return (
    <div className="blog-search-results">
      <BlogList posts={hits} buttonText={buttonText} />
    </div>
  );
};

BlogSearchResults.propTypes = {
  ...blogSearchResultsType,
};

const CustomBlogSearchResults = connectHits(
  connectStateResults(BlogSearchResults),
);

export default CustomBlogSearchResults;
