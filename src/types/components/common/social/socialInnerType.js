import { shape, string } from 'prop-types';

// Social Inner Type
export default shape({
  type: string,
  url: string.isRequired,
  name: string.isRequired,
});
