import { string, func, shape } from 'prop-types';

// Search Form Type
export default {
  currentRefinement: string.isRequired,
  refine: func.isRequired,
  placeholder: string.isRequired,
  buttonIcon: shape({
    altText: string.isRequired,
    sourceUrl: string.isRequired,
  }).isRequired,
};
