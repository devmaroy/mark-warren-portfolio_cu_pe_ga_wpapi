import { arrayOf, shape, string } from 'prop-types';

// Footer Menu Type
export default {
  menu: arrayOf(
    shape({
      text: string.isRequired,
      url: string.isRequired,
    }),
  ).isRequired,
};
