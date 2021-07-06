import { arrayOf, shape, string } from 'prop-types';

// Blog Post Tags Type
export default {
  tags: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  ).isRequired,
};
