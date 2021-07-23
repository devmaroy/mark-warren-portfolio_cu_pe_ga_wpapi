import { string, arrayOf, shape, node } from 'prop-types';
import socialInnerType from './social/socialInnerType';
import seoType from './seoType';

// Error Page Type
export default {
  type: string,
  heading: string,
  subHeading: string,
  social: arrayOf(socialInnerType),
  seo: shape({
    ...seoType,
  }).isRequired,
  children: node,
};
