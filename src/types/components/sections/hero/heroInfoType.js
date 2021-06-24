import { arrayOf, shape, string } from 'prop-types';

// Hero Info Type
export default {
  title: string.isRequired,
  tagline: string.isRequired,
  text: string.isRequired,
  cta: arrayOf(
    shape({
      text: string.isRequired,
      url: string.isRequired,
      variant: string.isRequired,
    }),
  ),
};
