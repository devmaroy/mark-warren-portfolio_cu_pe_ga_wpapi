import { arrayOf, shape } from 'prop-types';
import socialInnerType from '../../common/social/socialInnerType';

// Footer Social Type
export default {
  social: arrayOf(
    shape({
      socialInnerType,
    }),
  ).isRequired,
};
