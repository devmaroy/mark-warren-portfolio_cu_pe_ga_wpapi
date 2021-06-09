import { func, shape, string } from 'prop-types';

// Contact Form Info Type
export default {
  handleReset: func.isRequired,
  messages: shape({
    title: string.isRequired,
    text: string,
    infoText: string.isRequired,
    infoTextLink: string.isRequired,
  }).isRequired,
  type: string,
};
