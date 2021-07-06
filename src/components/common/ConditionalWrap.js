// Conditional Wrap component
// It is used when we need to wrap something in component, but not always.

import React from 'react';
import conditionalWrapType from '../../types/components/common/conditionalWrapType';

const ConditionalWrap = ({ condition, wrap, children }) => (
  <>{condition ? wrap(children) : children}</>
);

ConditionalWrap.propTypes = {
  ...conditionalWrapType,
};

export default ConditionalWrap;
