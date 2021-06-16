import { shape, bool } from 'prop-types';
import postType from '../../pages/blog/postType';

// Blog Post Teaser Type
export default {
  post: shape({
    ...postType,
  }).isRequired,
  large: bool,
};
