import { arrayOf, shape, string, bool, func } from 'prop-types';

// Navigation Type
export default {
  items: arrayOf(
    shape({
      id: string.isRequired,
      label: string.isRequired,
      path: string.isRequired,
      cssCLasses: arrayOf(string),
    }).isRequired,
  ).isRequired,
  cta: shape({
    text: string.isRequired,
    url: string.isRequired,
  }).isRequired,
  isOpen: bool.isRequired,
  toggleNavigation: func.isRequired,
};
