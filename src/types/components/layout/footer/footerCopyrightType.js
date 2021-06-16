import { shape, string } from 'prop-types';

// Footer Copyright Type
export default {
  logo: shape({ sourceUrl: string.isRequired, altText: string.isRequired })
    .isRequired,
  textCopyright: string.isRequired,
  textRights: string.isRequired,
};
