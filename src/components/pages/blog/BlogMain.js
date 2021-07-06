import React from 'react';
import BlogList from './BlogList';
import Pagination from '../../common/pagination/Pagination';
import blogMainType from '../../../types/components/pages/blog/blogMainType';

const BlogMain = ({ posts, pagination }) => (
  <div className="blog-main">
    <BlogList posts={posts} />

    <div className="blog__pagination">
      <Pagination
        totalPages={pagination.totalPages}
        currentPage={pagination.currentPage}
        prefix={pagination.slug}
        containerClassName="gsp"
        listClassName="pagination"
        listItemClassName="pagination__item"
        listLinkClassName="pagination__link"
        listLinkActiveClassName="pagination__link--active"
      />
    </div>
  </div>
);

BlogMain.propTypes = {
  ...blogMainType,
};

export default BlogMain;
