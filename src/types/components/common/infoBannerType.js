import { string, node } from 'prop-types';

// Info Banner Type
export default {
  heading: string.isReqired,
  text: string.isRequired,
  children: node.isRequired,
};
