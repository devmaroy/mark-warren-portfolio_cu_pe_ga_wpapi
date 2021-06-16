import { arrayOf, shape, string } from 'prop-types';
import imageType from '../../../common/imageType';

// Blog Sidebar Instagram Feed Type
export default {
  items: arrayOf(
    shape({
      id: string.isRequired,
      childImageSharp: shape({ ...imageType }).isRequired,
    }).isRequired,
  ).isRequired,
};
