/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import { format } from 'timeago.js';
import Button from '../../common/Button';
import blogPostTeaserType from '../../../types/components/shared/blog/blogPostTeaserType';

const BlogPostTeaser = ({ post, large }) => (
  <div
    className={classNames('blog-post-teaser', {
      'blog-post-teaser--large': large,
    })}
  >
    <div className="blog-post-teaser__header">
      <div
        className={classNames('blog-post-teaser__image', {
          'blog-post-teaser__image--large': large,
        })}
      >
        <Link to={post.slug}>
          <GatsbyImage
            image={post.image.childImageSharp.gatsbyImageData}
            alt={post.title}
          />
        </Link>
      </div>

      <div
        className={classNames('blog-post-teaser__meta', {
          'blog-post-teaser__meta--large': large,
        })}
      >
        <ul className="blog-post-teaser-categories">
          {post.categories.length !== 0 &&
            post.categories.map(({ id, name, slug }) => (
              <li
                key={id}
                className={classNames('blog-post-teaser-categories__category', {
                  'blog-post-teaser-categories__category--large': large,
                })}
              >
                <Link
                  to={slug}
                  className="blog-post-teaser-categories__category-link"
                >
                  {name}
                </Link>
              </li>
            ))}
        </ul>

        {large && (
          <div
            className={classNames('blog-post-teaser__date', {
              'blog-post-teaser__date--large': large,
            })}
          >
            {format(post.date)}
          </div>
        )}
      </div>
    </div>

    <div className="blog-post-teaser__content">
      <Link to={post.slug} className="blog-post-teaser__title-link">
        <h3
          className={classNames('blog-post-teaser__title', {
            'blog-post-teaser__title--large': large,
          })}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </Link>

      {!large && (
        <div className="blog-post-teaser__date">{format(post.date)}</div>
      )}

      {post.excerpt && (
        <div
          className="blog-post-teaser__excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      )}
    </div>

    {large && (
      <div className="blog-post-teaser__footer">
        <Button to={post.slug} showIcon={false}>
          Read more
        </Button>
      </div>
    )}
  </div>
);

BlogPostTeaser.propTypes = {
  ...blogPostTeaserType,
};

export default BlogPostTeaser;
