import { shape, string } from 'prop-types';

// Footer Copyright Type
export default {
  logo: shape({ sourceUrl: string.isRequired, altText: string.isRequired })
    .isRequired,
  copyrightText: string.isRequired,
  copyrightRights: string.isRequired,
};
