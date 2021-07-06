import { shape, string } from 'prop-types';
import postType from './postType';

// Blog Post Type
export default {
  post: shape({ ...postType }).isRequired,
  recentArticlesHeading: string.isRequired,
  shareHeading: string.isRequired,
};
