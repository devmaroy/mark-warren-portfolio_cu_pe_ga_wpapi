import React from 'react';
import { Link } from 'gatsby';
import { Highlight } from 'react-instantsearch-dom';
import searchResultType from '../../../types/components/common/search/searchResultType';

const SearchResult = ({ hit }) => (
  <div className="search-result">
    <Link to={`/${hit.prefix}/${hit.slug}`} className="search-result__link">
      <Highlight attribute="title" hit={hit} />
    </Link>
  </div>
);

SearchResult.propTypes = {
  ...searchResultType,
};

export default SearchResult;
