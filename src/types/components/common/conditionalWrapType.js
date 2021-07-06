import { bool, node } from 'prop-types';

// Conditional Wrap Type
export default {
  condition: bool.isRequired,
  wrap: node.isRequired,
  children: node.isRequired,
};
