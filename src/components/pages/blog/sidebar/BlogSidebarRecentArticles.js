/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'timeago.js';
import { GlobalContext } from '../../../../context/GlobalContextProvider';
import BlogSidebarHeader from './BlogSidebarHeader';
import blogSidebarRecentArticlesType from '../../../../types/components/pages/blog/sidebar/blogSidebarRecentArticlesType';

const BlogSidebarRecentArticles = ({ heading, posts }) => {
  const globalContextData = useContext(GlobalContext);
  const { slug: blogSlug } = globalContextData.pages.blog;
  const { slug: blogCategorySlug } = globalContextData.pages.blogCategories;

  return (
    <div className="blog-sidebar__panel blog-sidebar-recent-articles">
      <BlogSidebarHeader heading={heading} />

      <ul className="blog-sidebar-recent-articles-list">
        {posts.map((post) => (
          <li key={post.id} className="blog-sidebar-recent-articles-list__item">
            <div className="blog-sidebar-recent-articles-list__image">
              <Link to={`/${blogSlug}/${post.slug}`}>
                <GatsbyImage
                  image={
                    post.featuredImage.node.imageFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.featuredImage.node.altText}
                />
              </Link>
            </div>

            <div className="blog-sidebar-recent-articles-list__content">
              <Link
                to={`/${blogSlug}/${post.slug}`}
                className="blog-sidebar-recent-articles-list__title-link"
              >
                <h4
                  className="blog-sidebar-recent-articles-list__title"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </Link>

              <ul className="blog-sidebar-recent-articles-list-categories">
                {post.categories.nodes.map(({ id, name, slug }) => (
                  <li
                    key={id}
                    className="blog-sidebar-recent-articles-list-categories__category"
                  >
                    <Link
                      to={`/${blogCategorySlug}/${slug}`}
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
};

BlogSidebarRecentArticles.propTypes = {
  ...blogSidebarRecentArticlesType,
};

export default BlogSidebarRecentArticles;
