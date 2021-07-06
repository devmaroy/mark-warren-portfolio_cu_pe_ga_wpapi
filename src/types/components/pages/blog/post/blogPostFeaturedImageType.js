import { shape, string } from 'prop-types';
import imageType from '../../../common/imageType';

// Blog Post Featured Image Type
export default {
  featuredImage: shape({
    altText: string.isRequired,
    sourceUrl: string.isRequired,
    imageFile: shape({
      childImageSharp: shape({ ...imageType }).isRequired,
    }).isRequired,
  }).isRequired,
};
