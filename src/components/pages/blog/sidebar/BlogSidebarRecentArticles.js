/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'timeago.js';
import BlogSidebarHeader from './BlogSidebarHeader';
import blogSidebarRecentArticlesType from '../../../../types/components/pages/blog/sidebar/blogSidebarRecentArticlesType';

const BlogSidebarRecentArticles = ({ posts }) => (
  <div className="blog-sidebar__panel blog-sidebar-recent-articles">
    <BlogSidebarHeader heading="Recent Articles" />

    <ul className="blog-sidebar-recent-articles-list">
      {posts.map((post) => (
        <li key={post.id} className="blog-sidebar-recent-articles-list__item">
          <div className="blog-sidebar-recent-articles-list__image">
            <Link to={post.slug}>
              <GatsbyImage
                image={post.image.childImageSharp.gatsbyImageData}
                alt={post.title}
              />
            </Link>
          </div>

          <div className="blog-sidebar-recent-articles-list__content">
            <Link
              to={post.slug}
              className="blog-sidebar-recent-articles-list__title-link"
            >
              <h4
                className="blog-sidebar-recent-articles-list__title"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </Link>

            <ul className="blog-sidebar-recent-articles-list-categories">
              {post.categories.map(({ id, name, slug }) => (
                <li
                  key={id}
                  className="blog-sidebar-recent-articles-list-categories__category"
                >
                  <Link
                    to={slug}
                    className="blog-sidebar-recent-articles-list-categories__category-link"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="blog-sidebar-recent-articles-list__date">
              {format(post.date)}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

BlogSidebarRecentArticles.propTypes = {
  ...blogSidebarRecentArticlesType,
};

export default BlogSidebarRecentArticles;
