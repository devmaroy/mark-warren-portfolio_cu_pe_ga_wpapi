import { func, node, string } from 'prop-types';

// Contact Form Info Type
export default {
  type: string.isRequired,
  title: string.isRequired,
  children: node.isRequired,
  infoText: string.isRequired,
  infoTextLink: string.isRequired,
  handleReset: func.isRequired,
};
