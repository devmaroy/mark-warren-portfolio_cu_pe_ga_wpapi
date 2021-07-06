import { arrayOf, shape, number } from 'prop-types';
import postType from '../postType';

// Blog Search Results Type
export default {
  hits: arrayOf(
    shape({
      ...postType,
    }),
  ),
  perPage: number.isRequired,
};
