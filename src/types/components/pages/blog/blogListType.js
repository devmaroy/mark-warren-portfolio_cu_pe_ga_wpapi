import { arrayOf, shape, bool, number } from 'prop-types';
import postType from './postType';

// Blog List Type
export default {
  posts: arrayOf(
    shape({
      ...postType,
    }),
  ),
  showDummy: bool,
  showDummyAmount: number,
};
