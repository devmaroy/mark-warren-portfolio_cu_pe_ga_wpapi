import { string, arrayOf, shape } from 'prop-types';
import imageType from '../../common/imageType';

// Post Type
export default {
  id: string.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
  excerpt: string,
  date: string.isRequired,
  categories: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  ),
  image: shape({
    id: string.isRequired,
    childImageSharp: shape({ ...imageType }).isRequired,
  }).isRequired,
};
