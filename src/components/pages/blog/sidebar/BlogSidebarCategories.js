import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GlobalContext } from '../../../../context/GlobalContextProvider';
import BlogSidebarHeader from './BlogSidebarHeader';
import blogSidebarCategoriesType from '../../../../types/components/pages/blog/sidebar/blogSidebarCategoriesType';

const BlogSidebarCategories = ({ heading, categories }) => {
  const globalContextData = useContext(GlobalContext);
  const { slug: blogCategorySlug } = globalContextData.pages.blogCategories;

  return (
    <div className="blog-sidebar__panel blog-sidebar-categories">
      <BlogSidebarHeader heading={heading} />

      <ul className="blog-sidebar-categories-list">
        {categories.map(
          ({ id, name, slug, count }) =>
            count &&
            count !== 0 && (
              <li key={id} className="blog-sidebar-categories-list__category">
                <Link
                  to={`/${blogCategorySlug}/${slug}`}
                  className="blog-sidebar-categories-list__category-link"
                >
                  {name} ({count})
                </Link>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

BlogSidebarCategories.propTypes = {
  ...blogSidebarCategoriesType,
};

export default BlogSidebarCategories;
