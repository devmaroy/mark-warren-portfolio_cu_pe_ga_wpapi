import { string, number } from 'prop-types';

// Blog Pagination Type
export default {
  id: string.isRequired,
  dbID: number,
  currentPage: number.isRequired,
  limit: number.isRequired,
  skip: number.isRequired,
  slug: string.isRequired,
};
