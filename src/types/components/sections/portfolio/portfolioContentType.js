import { string, arrayOf, shape, bool, number } from 'prop-types';
import imageType from '../../common/imageType';

// Portfolio Content Type
export default {
  items: arrayOf(
    shape({
      id: string.isRequired,
      acf: shape({
        image: shape({
          altText: string.isRequired,
          sourceUrl: string.isRequired,
          imageFile: shape({
            childImageSharp: shape({ ...imageType }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      categories: shape({
        nodes: arrayOf(shape({ slug: string.isRequired }).isRequired)
          .isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  selectedCategory: string.isRequired,
  showAll: bool,
  buttonText: string.isRequired,
  perPage: number.isRequired,
};
