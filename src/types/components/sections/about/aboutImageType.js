import { string, shape } from 'prop-types';
import imageType from '../../common/imageType';

// About Image Type
export default {
  image: shape({
    altText: string,
    sourceUrl: string,
    imageFile: shape({
      childImageSharp: shape({
        ...imageType,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
