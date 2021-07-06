import React from 'react';
import Button from '../../../common/Button';
import blogPostTagsType from '../../../../types/components/pages/blog/post/blogPostTagsType';

const BlogPostTags = ({ tags }) => (
  <ul className="blog-post-tags">
    {tags.map(({ id, name, slug }) => (
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
);

BlogPostTags.propTypes = {
  ...blogPostTagsType,
};

export default BlogPostTags;
