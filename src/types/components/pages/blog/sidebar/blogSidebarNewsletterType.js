import { string, shape } from 'prop-types';

// Blog Sidebar Newsletter
export default {
  heading: string.isRequired,
  form: shape({
    placeholder: string.isRequired,
    buttonText: string.isRequired,
  }).isRequired,
};
