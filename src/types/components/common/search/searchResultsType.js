import { string, number, arrayOf, shape } from 'prop-types';

// Search Results Type
export default {
  searchState: shape({
    query: string,
    page: number,
  }),
  hits: arrayOf(shape()),
  limit: number,
  heading: string,
  notFoundText: string,
  loadMoreText: string,
};
