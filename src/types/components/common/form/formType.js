import { string, bool, func, node } from 'prop-types';

// Form Type
export default {
  className: string,
  showButton: bool,
  buttonText: string,
  buttonDisabled: bool,
  buttonClassName: string,
  onSubmit: func,
  method: string,
  name: string,
  children: node,
};
