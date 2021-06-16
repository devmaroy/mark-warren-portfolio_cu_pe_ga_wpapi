import { arrayOf, shape } from 'prop-types';
import postType from './postType';

// Blog Main Type
export default {
  posts: arrayOf(shape({ ...postType }).isRequired).isRequired,
};
