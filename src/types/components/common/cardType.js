import { string, number, shape } from 'prop-types';
import imageType from './imageType';

// Card Type
export default {
  number,
  icon: shape({ sourceUrl: string.isRequired, altText: string.isRequired })
    .isRequired,
  iconSize: string,
  heading: string,
  text: string,
  author: shape({
    image: shape({
      id: string.isRequired,
      childImageSharp: shape({ ...imageType }),
    }).isRequired,
    name: string.isRequired,
    position: string.isRequired,
  }),
};
