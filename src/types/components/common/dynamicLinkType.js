import { string, func, shape, node, bool } from 'prop-types';

// Dynamic Link Type
export default {
  to: string.isRequired,
  onClick: func,
  className: string,
  activeClassName: string,
  location: shape({}),
  dynamicLinkType: bool,
  children: node.isRequired,
};
