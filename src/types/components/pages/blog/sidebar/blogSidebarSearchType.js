import { shape, string, number } from 'prop-types';

// Blog Sidebar Search
export default {
  heading: string.isRequired,
  searchResultsHeading: string.isRequired,
  searchResultsLimit: number.isRequired,
  searchResultsLoadMoreText: string.isRequired,
  searchResultsNotFoundText: string.isRequired,
  form: shape({
    placeholder: string.isRequired,
    buttonIcon: shape({
      altText: string.isRequired,
      sourceUrl: string.isRequired,
    }).isRequired,
  }).isRequired,
};
