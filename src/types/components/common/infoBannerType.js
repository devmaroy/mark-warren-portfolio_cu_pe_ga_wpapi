import { string, node } from 'prop-types';

// Info Banner Type
export default {
  heading: string.isRequired,
  text: string.isRequired,
  children: node.isRequired,
};
