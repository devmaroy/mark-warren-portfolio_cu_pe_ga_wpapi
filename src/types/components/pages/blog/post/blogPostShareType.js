import { arrayOf, shape, string } from 'prop-types';

// Blog Post Share Type
export default {
  share: arrayOf(
    shape({
      name: string.isRequired,
      quote: string,
    }).isRequired,
  ).isRequired,
  heading: string.isRequired,
};
