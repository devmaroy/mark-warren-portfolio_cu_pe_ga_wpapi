import { arrayOf, shape, string, bool } from 'prop-types';
import imageType from '../../common/imageType';
import seoType from '../../common/seoType';

// Post Type
export default {
  id: string.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
  excerpt: string,
  date: string.isRequired,
  prefix: string,
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
  acf: shape({
    enableShare: bool.isRequired,
    share: arrayOf(
      shape({
        name: string.isRequired,
        quote: string,
      }).isRequired,
    ).isRequired,
  }),
  seo: shape({
    ...seoType,
  }),
};
