import { shape, string, node } from 'prop-types';
import seoType from './seoType';

// Sub Page Type
export default {
  seo: shape({
    seo: shape({ ...seoType }).isRequired,
  }),
  className: string,
  classNameInner: string,
  children: node,
};
