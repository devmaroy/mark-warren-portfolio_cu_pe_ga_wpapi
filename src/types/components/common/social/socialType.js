import { arrayOf, shape, bool } from 'prop-types';
import socialInnerType from './socialInnerType';

// Social Type
export default {
  items: arrayOf(
    shape({
      socialInnerType,
    }),
  ),
  fixedWidth: bool,
};
