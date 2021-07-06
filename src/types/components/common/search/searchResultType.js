import { shape } from 'prop-types';
import postType from '../../pages/blog/postType';

// Search Result Type
export default {
  hit: shape({ ...postType }).isRequired,
};
