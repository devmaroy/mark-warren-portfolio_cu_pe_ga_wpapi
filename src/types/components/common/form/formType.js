import { string, bool, func, node } from 'prop-types';

// Form Type
export default {
  className: string,
  showButton: bool,
  showButtonIcon: bool,
  buttonIcon: string,
  buttonText: string,
  buttonDisabled: bool,
  buttonClassName: string,
  buttonDisableShadow: bool,
  buttonSize: string,
  onSubmit: func,
  method: string,
  name: string,
  children: node,
};
