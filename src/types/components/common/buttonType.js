import { string, bool, node } from 'prop-types';

// Button Type
export default {
  to: string,
  variant: string,
  size: string,
  type: string,
  iconImg: string,
  showIcon: bool,
  className: string,
  isDisabled: bool,
  disableShadow: bool,
  children: node,
};
