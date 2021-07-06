import { arrayOf, shape, string, number } from 'prop-types';

// Blog Sidebar Tags
export default {
  heading: string.isRequired,
  tags: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
      count: number.isRequired,
    }).isRequired,
  ).isRequired,
};
