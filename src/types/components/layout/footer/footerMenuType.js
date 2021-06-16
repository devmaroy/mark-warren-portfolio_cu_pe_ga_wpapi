import { arrayOf, shape, string } from 'prop-types';

// Footer Menu Type
export default {
  menu: arrayOf(
    shape({
      id: string.isRequired,
      text: string.isRequired,
      url: string.isRequired,
    }),
  ).isRequired,
};
