/* eslint-disable react/no-danger */
import React from 'react';
import blogSidebarHeaderType from '../../../../types/components/pages/blog/sidebar/blogSidebarHeaderType';

const BlogSidebarHeader = ({ heading }) => (
  <div className="blog-sidebar-header">
    <h3
      className="blog-sidebar-header__heading"
      dangerouslySetInnerHTML={{ __html: heading }}
    />

    <div className="blog-sidebar-header__line" />
  </div>
);

BlogSidebarHeader.propTypes = {
  ...blogSidebarHeaderType,
};

export default BlogSidebarHeader;
