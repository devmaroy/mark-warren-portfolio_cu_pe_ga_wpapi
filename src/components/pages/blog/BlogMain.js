import React from 'react';
import BlogPostTeaser from '../../shared/blog/BlogPostTeaser';
import Pagination from '../../common/pagination/Pagination';
import blogMainType from '../../../types/components/pages/blog/blogMainType';

const BlogMain = ({ posts }) => (
  <div className="blog-main">
    <div className="blog-main__list">
      {posts.map((post) => (
        <BlogPostTeaser key={post.id} post={post} large />
      ))}
    </div>

    <div className="blog-main__pagination">
      <Pagination
        totalPages={3}
        currentPage={1}
        prefix="blog"
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
