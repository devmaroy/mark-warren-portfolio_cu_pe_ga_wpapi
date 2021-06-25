import { string, arrayOf, shape } from 'prop-types';
import imageType from '../../common/imageType';

// Post Type
export default {
  id: string.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
  excerpt: string,
  date: string.isRequired,
  featuredImage: shape({
    node: shape({
      altText: string.isRequired,
      sourceUrl: string.isRequired,
      imageFile: shape({
        childImageSharp: shape({ ...imageType }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  categories: shape({
    nodes: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        slug: string.isRequired,
      }),
    ).isRequired,
  }),
};
