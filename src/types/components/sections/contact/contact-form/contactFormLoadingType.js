import { shape, string } from 'prop-types';

// Contact Form Loading Type
export default {
  loadingIcon: shape({
    altText: string,
    sourceUrl: string.isRequired,
  }).isRequired,
};
