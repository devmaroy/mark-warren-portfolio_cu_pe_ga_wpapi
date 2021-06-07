import { string, arrayOf, shape } from 'prop-types';

// About Info Type
export default {
  text: string.isRequired,
  technologies: arrayOf(
    shape({ id: string.isRequired, name: string.isRequired }).isRequired,
  ).isRequired,
};
