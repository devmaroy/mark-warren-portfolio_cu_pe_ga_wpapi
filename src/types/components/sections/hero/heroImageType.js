import { shape, string } from 'prop-types';
import imageType from '../../common/imageType';

// Hero Image Type
export default {
  lg: shape({
    imageFile: shape({
      childImageSharp: shape({
        ...imageType,
      }).isRequired,
    }).isRequired,
    altText: string.isRequired,
  }).isRequired,
  xl: shape({
    imageFile: shape({
      childImageSharp: shape({
        ...imageType,
      }).isRequired,
    }).isRequired,
    altText: string.isRequired,
  }).isRequired,
};
