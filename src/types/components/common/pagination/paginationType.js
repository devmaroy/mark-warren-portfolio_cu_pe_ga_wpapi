import { string, number } from 'prop-types';

// Pagination Type
export default {
  totalPages: number.isRequired,
  prefix: string,
  containerClassName: string,
  listClassName: string,
  listItemClassName: string,
  listLinkClassName: string,
  listLinkActiveClassName: string,
};
