import { arrayOf, shape, bool, string } from 'prop-types';

// Social Type
export default {
  items: arrayOf(
    shape({
      type: string.isRequired,
      url: string.isRequired,
      name: string.isRequired,
    }),
  ),
  fixedWidth: bool,
};
