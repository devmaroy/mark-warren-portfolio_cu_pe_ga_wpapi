import { func, number } from 'prop-types';

// Blog Search Pagination Type
export default {
  wrapper: func,
  currentRefinement: number.isRequired,
  nbPages: number.isRequired,
  refine: func.isRequired,
  createURL: func.isRequired,
};
