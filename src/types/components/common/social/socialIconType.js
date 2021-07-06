import { string, bool } from 'prop-types';

// Social Icon Type
export default {
  icon: string.isRequired,
  type: string,
  className: string,
  fixedWidth: bool,
};
