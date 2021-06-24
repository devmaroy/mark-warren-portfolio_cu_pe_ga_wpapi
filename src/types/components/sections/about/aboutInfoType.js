import { string, arrayOf, shape } from 'prop-types';

// About Info Type
export default {
  text: string.isRequired,
  technologies: shape({
    heading: string.isRequired,
    list: arrayOf(
      shape({
        name: string.isRequired,
      }).isRequired,
    ).isRequired,
  }),
};
