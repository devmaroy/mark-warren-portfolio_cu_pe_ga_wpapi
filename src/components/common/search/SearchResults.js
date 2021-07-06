/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { connectStateResults, connectHits } from 'react-instantsearch-dom';
import SearchResult from './SearchResult';
import searchResultsType from '../../../types/components/common/search/searchResultsType';

const SearchResults = ({
  searchState,
  hits,
  limit = 6,
  heading = 'Results',
  notFoundText = 'Nothing was found.',
  loadMoreText = 'see more results',
}) => {
  // Check if we have items
  const hasHits = hits && hits.length !== 0;

  // Limit search result - if we have more then limit -> redirect to full page.
  const limitedHits = hasHits && hits.slice(0, limit);

  // Check if user searched for something.
  if (searchState && searchState.query) {
    return (
      <ul className="search-results">
        <h4 className="search-results__heading">
          {heading} ({hits && hits.length})
        </h4>

        {!hasHits && (
          <span
            className="search-results__notfound"
            dangerouslySetInnerHTML={{ __html: notFoundText }}
          />
        )}

        {hasHits &&
          limitedHits.map((hit) => (
            <li key={hit.objectID} className="search-results__item">
              <SearchResult hit={hit} />
            </li>
          ))}

        {hits.length > limitedHits.length && (
          <Link
            to={`/blog/search?q=${encodeURIComponent(searchState.query)}`}
            className="search-results__link"
            dangerouslySetInnerHTML={{ __html: loadMoreText }}
          />
        )}
      </ul>
    );
  }

  return null;
};

SearchResults.propTypes = {
  ...searchResultsType,
};

const CustomSearchResults = connectHits(connectStateResults(SearchResults));

export default CustomSearchResults;
