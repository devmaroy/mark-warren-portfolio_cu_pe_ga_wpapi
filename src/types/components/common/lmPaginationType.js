import { number, string, arrayOf, func, any } from 'prop-types';

// Load More Pagination Type
export default {
  perPage: number,
  items: arrayOf(any).isRequired,
  paginationClassName: string,
  buttonVariant: string,
  buttonClassName: string,
  buttonText: string,
  onReset: func,
  children: func.isRequired,
};
