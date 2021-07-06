import { arrayOf, shape, string, number } from 'prop-types';

// Blog Sidebar Categories
export default {
  heading: string.isRequired,
  categories: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
      count: number,
    }).isRequired,
  ).isRequired,
};
