import { string, shape } from 'prop-types';

// Logo Type
export default {
  logo: shape({ altText: string.isRequired, sourceUrl: string.isRequired })
    .isRequired,
  size: string,
};
