/* eslint-disable react/no-danger */
import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliaSearchClientSettings from '../../../../utils/algoliaSearchClientSettings';
import BlogSidebarHeader from './BlogSidebarHeader';
import SearchForm from '../../../common/search/SearchForm';
import SearchResults from '../../../common/search/SearchResults';
import blogSidebarSearchType from '../../../../types/components/pages/blog/sidebar/blogSidebarSearchType';

const searchClient = algoliasearch(...algoliaSearchClientSettings);

const BlogSidebarSearch = ({
  heading = 'Search',
  form,
  searchResultsHeading,
  searchResultsLimit,
  searchResultsLoadMoreText,
  searchResultsNotFoundText,
}) => (
  <div className="blog-sidebar__panel blog-sidebar-search">
    <BlogSidebarHeader heading={heading} />

    <InstantSearch searchClient={searchClient} indexName="blog">
      <SearchForm placeholder={form.placeholder} buttonIcon={form.buttonIcon} />
      <SearchResults
        limit={searchResultsLimit}
        heading={searchResultsHeading}
        loadMoreText={searchResultsLoadMoreText}
        notFoundText={searchResultsNotFoundText}
      />
    </InstantSearch>
  </div>
);

BlogSidebarSearch.propTypes = {
  ...blogSidebarSearchType,
};

export default BlogSidebarSearch;
