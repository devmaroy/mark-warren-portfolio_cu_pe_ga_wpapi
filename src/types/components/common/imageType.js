import { shape, string, number, arrayOf, object } from 'prop-types';

// Image Fluid Type
export default {
  gatsbyImageData: shape({
    backgroundColor: string.isRequired,
    height: number.isRequired,
    width: number.isRequired,
    layout: string.isRequired,
    images: shape({
      fallback: shape({
        sizes: string.isRequired,
        src: string.isRequired,
        srcSet: string.isRequired,
      }).isRequired,
      sources: arrayOf(shape({})).isRequired,
    }).isRequired,
  }).isRequired,
};

// fluid: shape({
//   aspectRatio: number.isRequired,
//   base64: string.isRequired,
//   sizes: string.isRequired,
//   src: string.isRequired,
//   srcSet: string.isRequired,
// }).isRequired,
