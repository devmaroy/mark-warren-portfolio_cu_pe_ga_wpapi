import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import blogPostFeaturedImageType from '../../../../types/components/pages/blog/post/blogPostFeaturedImageType';

const BlogPostFeaturedImage = ({ featuredImage }) => (
  <div className="blog-post-featured-image">
    <GatsbyImage
      image={featuredImage.imageFile.childImageSharp.gatsbyImageData}
      alt={featuredImage.altText}
    />
  </div>
);

BlogPostFeaturedImage.propTypes = {
  ...blogPostFeaturedImageType,
};

export default BlogPostFeaturedImage;
