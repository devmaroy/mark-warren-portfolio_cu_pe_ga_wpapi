import { string, number, arrayOf, shape, func } from 'prop-types';

// Portfolio Menu Type
export default {
  categories: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
      count: number,
    }).isRequired,
  ).isRequired,
  defaultCategory: string.isRequired,
  activeCategory: string.isRequired,
  setActiveCategory: func.isRequired,
};
