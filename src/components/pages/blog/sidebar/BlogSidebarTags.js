import React from 'react';
import Button from '../../../common/Button';
import BlogSidebarHeader from './BlogSidebarHeader';
import blogSidebarTagsType from '../../../../types/components/pages/blog/sidebar/blogSidebarTagsType';

const BlogSidebarTags = ({ tags }) => (
  <div className="blog-sidebar__panel blog-sidebar-tags">
    <BlogSidebarHeader heading="Tags" />

    <ul className="blog-sidebar-tags-list">
      {tags.map(({ id, name, slug, count }) => (
        <li key={id} className="blog-sidebar-tags-list__tag">
          <Button
            to={slug}
            variant="tertiary"
            size="sm"
            showIcon={false}
            className="blog-sidebar-tags-list__tag-link"
          >
            {name} ({count})
          </Button>
        </li>
      ))}
    </ul>
  </div>
);

BlogSidebarTags.propTypes = {
  ...blogSidebarTagsType,
};

export default BlogSidebarTags;
