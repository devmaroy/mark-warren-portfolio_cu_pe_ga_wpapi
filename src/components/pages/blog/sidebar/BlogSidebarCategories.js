import React from 'react';
import { Link } from 'gatsby';
import BlogSidebarHeader from './BlogSidebarHeader';
import blogSidebarCategoriesType from '../../../../types/components/pages/blog/sidebar/blogSidebarCategoriesType';

const BlogSidebarCategories = ({ categories }) => (
  <div className="blog-sidebar__panel blog-sidebar-categories">
    <BlogSidebarHeader heading="Categories" />

    <ul className="blog-sidebar-categories-list">
      {categories.map(({ id, name, slug, count }) => (
        <li key={id} className="blog-sidebar-categories-list__category">
          <Link
            to={slug}
            className="blog-sidebar-categories-list__category-link"
          >
            {name} ({count})
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

BlogSidebarCategories.propTypes = {
  ...blogSidebarCategoriesType,
};

export default BlogSidebarCategories;
