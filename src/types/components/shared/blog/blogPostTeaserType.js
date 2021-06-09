import { string, arrayOf, shape } from 'prop-types';
import imageType from '../../common/imageType';

// Blog Post Teaser Type
export default {
  post: shape({
    id: string.isRequired,
    slug: string.isRequired,
    title: string.isRequired,
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
  }).isRequired,
};
