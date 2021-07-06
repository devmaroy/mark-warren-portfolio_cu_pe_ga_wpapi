import { arrayOf, shape, string } from 'prop-types';
import postType from '../postType';

// Blog Sidebar Recent Articles Type
export default {
  heading: string.isRequired,
  posts: arrayOf(shape({ ...postType }).isRequired).isRequired,
};
