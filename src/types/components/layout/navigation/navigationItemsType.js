import { arrayOf, shape, string, func, bool } from 'prop-types';

// Navigation Items Type
export default {
  items: arrayOf(
    shape({
      id: string.isRequired,
      label: string.isRequired,
      path: string.isRequired,
      cssCLasses: arrayOf(string),
      acf: shape({
        menusItemPartiallyActive: bool,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  toggleNavigation: func.isRequired,
};
