import { string, arrayOf, shape } from 'prop-types';

// Blog Post Header Type
export default {
  title: string.isRequired,
  date: string.isRequired,
  categories: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  ).isRequired,
};
