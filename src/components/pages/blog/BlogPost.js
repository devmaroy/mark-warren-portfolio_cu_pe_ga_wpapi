/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'timeago.js';
import Button from '../../common/Button';
import Social from '../../common/social/Social';
import BlogPostsRecent from './BlogPostsRecent';
import blogPostType from '../../../types/components/pages/blog/blogPostType';

const BlogPost = ({ post }) => {
  const socialShare = [
    {
      id: 'f09c65d7-df16-4d4f-9754-11722ce9b6d3',
      name: 'facebook',
      type: 'normal',
      url: `https://facebook.com/sharer/sharer.php?u=https://markwarrenportfolio.marekmatejovic.com/${post.slug}`,
    },
    {
      id: 'e1db5d23-dc30-4529-8c9b-8c2b69f08a28',
      name: 'twitter',
      type: 'normal',
      url: `https://twitter.com/intent/tweet/?url=https://markwarrenportfolio.marekmatejovic.com/${post.slug}`,
    },
    {
      id: '23f34b13-44e3-459b-ace1-94898074aab5',
      name: 'linkedin',
      type: 'normal',
      url: `https://linkedin.com/shareArticle?mini=true&url=https://markwarrenportfolio.marekmatejovic.com/${post.slug}`,
    },
  ];

  return (
    <div className="blog-post">
      <div className="blog-post__layout">
        <div className="blog-post__header">
          <h1
            className="blog-post__title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          <div className="blog-post__meta">
            <ul className="blog-post-categories">
              {post.categories.map(({ id, name, slug }) => (
                <li key={id} className="blog-post-categories__category">
                  <Link
                    to={slug}
                    className="blog-post-categories__category-link"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="blog-post__date">{format(post.date)}</div>
          </div>
        </div>
      </div>

      <div className="blog-post__image">
        <GatsbyImage
          image={post.image.childImageSharp.gatsbyImageData}
          alt={post.title}
        />
      </div>

      <div className="blog-post__layout">
        <div className="blog-post__content">
          <div
            className="text-full blog-post__text"
            dangerouslySetInnerHTML={{ __html: post.text }}
          />
        </div>
      </div>

      <div className="blog-post__separator" />

      <div className="blog-post__footer">
        <div className="blog-post__layout">
          <ul className="blog-post-tags">
            {post.tags.map(({ id, name, slug }) => (
              <li key={id} className="blog-post-tags__tag">
                <Button
                  to={slug}
                  variant="tertiary"
                  size="sm"
                  showIcon={false}
                  className="blog-post-tags__tag-link"
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul>

          <div className="blog-post-share">
            <h5 className="blog-post-share__heading">Share this article</h5>
            <ul className="blog-post-share__social">
              <Social items={socialShare} fixedWidth={false} />
            </ul>
          </div>
        </div>

        <div className="blog-post-recent-articles">
          <h3 className="blog-post-recent-articles__heading">
            Recent Articles
          </h3>

          <BlogPostsRecent />
        </div>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  ...blogPostType,
};

export default BlogPost;
