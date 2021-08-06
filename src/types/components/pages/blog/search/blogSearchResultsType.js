import { bool, string, arrayOf, shape } from 'prop-types';
import postType from '../postType';

// Blog Search Results Type
export default {
  isSearchStalled: bool.isRequired,
  loadingIcon: shape({
    altText: string,
    sourceUrl: string.isRequired,
  }).isRequired,
  notFoundMessage: string.isRequired,
  buttonText: string,
  hits: arrayOf(
    shape({
      ...postType,
    }),
  ),
};