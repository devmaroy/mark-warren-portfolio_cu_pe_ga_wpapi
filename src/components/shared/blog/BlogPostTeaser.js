/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'timeago.js';
import blogPostTeaserType from '../../../types/components/shared/blog/blogPostTeaserType';

const BlogPostTeaser = ({ post }) => (
  <div className="blog-post-teaser">
    <div className="blog-post-teaser__header">
      <div className="blog-post-teaser__image">
        <Link to={post.slug}>
          <GatsbyImage
            image={post.image.childImageSharp.gatsbyImageData}
            alt={post.title}
          />
        </Link>
      </div>

      <ul className="blog-post-teaser-categories">
        {post.categories.length !== 0 &&
          post.categories.map(({ id, name, slug }) => (
            <li key={id} className="blog-post-teaser-categories__category">
              <Link
                to={slug}
                className="blog-post-teaser-categories__category-link"
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>

    <div className="blog-post-teaser__content">
      <Link to={post.slug} className="blog-post-teaser__title-link">
        <h3
          className="blog-post-teaser__title"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </Link>

      <div className="blog-post-teaser__date">{format(post.date)}</div>
    </div>
  </div>
);

BlogPostTeaser.propTypes = {
  ...blogPostTeaserType,
};

export default BlogPostTeaser;
