/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { format } from 'timeago.js';
import classNames from 'classnames';
import blogPostHeaderType from '../../../../types/components/pages/blog/post/blogPostHeaderType';

const BlogPostHeader = ({ title, categories, date }) => {
  const hasCategories = categories && categories.length !== 0;

  return (
    <div className="blog-post-header">
      <h1
        className="blog-post-header__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div className="blog-post-header__meta">
        {hasCategories && (
          <ul className="blog-post-header-categories">
            {categories.map(({ id, name, slug }) => (
              <li key={id} className="blog-post-header-categories__category">
                <Link
                  to={slug}
                  className="blog-post-header-categories__category-link"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div
          className={classNames('blog-post-header__date', {
            hidden: !hasCategories,
          })}
        >
          {format(date)}
        </div>
      </div>
    </div>
  );
};

BlogPostHeader.propTypes = {
  ...blogPostHeaderType,
};

export default BlogPostHeader;
