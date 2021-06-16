import { arrayOf, shape } from 'prop-types';
import postType from '../postType';

// Blog Sidebar Recent Articles Type
export default {
  posts: arrayOf(shape({ ...postType }).isRequired).isRequired,
};
