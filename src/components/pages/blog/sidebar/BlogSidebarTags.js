import React, { useContext } from 'react';
import { GlobalContext } from '../../../../context/GlobalContextProvider';
import Button from '../../../common/Button';
import BlogSidebarHeader from './BlogSidebarHeader';
import blogSidebarTagsType from '../../../../types/components/pages/blog/sidebar/blogSidebarTagsType';

const BlogSidebarTags = ({ heading, tags }) => {
  const globalContextData = useContext(GlobalContext);
  const { slug: blogTagSlug } = globalContextData.pages.blogTags;

  return (
    <div className="blog-sidebar__panel blog-sidebar-tags">
      <BlogSidebarHeader heading={heading} />

      <ul className="blog-sidebar-tags-list">
        {tags.map(
          ({ id, name, slug, count }) =>
            count &&
            count !== 0 && (
              <li key={id} className="blog-sidebar-tags-list__tag">
                <Button
                  to={`/${blogTagSlug}/${slug}`}
                  variant="tertiary"
                  size="sm"
                  showIcon={false}
                  className="blog-sidebar-tags-list__tag-link"
                >
                  {name} ({count})
                </Button>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

BlogSidebarTags.propTypes = {
  ...blogSidebarTagsType,
};

export default BlogSidebarTags;
