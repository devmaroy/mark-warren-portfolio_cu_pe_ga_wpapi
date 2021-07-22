/* eslint-disable react/no-danger */
import React from 'react';
import classNames from 'classnames';
import BlogPostHeader from './BlogPostHeader';
import BlogPostFeaturedImage from './BlogPostFeaturedImage';
import BlogPostContent from './BlogPostContent';
import BlogPostTags from './BlogPostTags';
import BlogPostShare from './BlogPostShare';
import BlogPostRecentArticles from './BlogPostRecentArticles';
import blogPostType from '../../../../types/components/pages/blog/blogPostType';

const BlogPost = ({ post, recentArticlesHeading, shareHeading }) => {
  const hasTags = post.tags && post.tags.nodes.length !== 0;
  const hasSocialShare = post.acf.share && post.acf.share.length !== 0;

  return (
    <div className="blog-post">
      <div className="blog-post__layout">
        <BlogPostHeader
          title={post.title}
          categories={post.categories.nodes}
          date={post.date}
        />
      </div>

      <BlogPostFeaturedImage featuredImage={post.featuredImage.node} />

      <div className="blog-post__layout">
        <BlogPostContent content={post.content} />
      </div>

      <div
        className={classNames('blog-post__separator', { nospacing: !hasTags })}
      />

      <div className="blog-post__footer">
        <div className="blog-post__layout">
          {hasTags && <BlogPostTags tags={post.tags.nodes} />}

          {post.acf.enableShare && hasSocialShare && (
            <BlogPostShare share={post.acf.share} heading={shareHeading} />
          )}
        </div>

        <BlogPostRecentArticles heading={recentArticlesHeading} />
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  ...blogPostType,
};

export default BlogPost;
