import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogPostTeaser from './post/BlogPostTeaser';

// API Query
const APIQuery = graphql`
  query BlogPostsRecentQuery {
    wpgraphql {
      posts(where: { orderby: { field: DATE, order: DESC } }, first: 3) {
        nodes {
          id
          title
          slug
          date
          featuredImage {
            node {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  gatsbyImageData(width: 660, quality: 90, placeholder: BLURRED)
                }
              }
            }
          }
          categories {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`;

const BlogPostRecent = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionRecentBlogData = data.wpgraphql.posts.nodes;

  return (
    <div className="blog-posts-recent">
      <div className="blog-posts-recent__inner">
        {APISectionRecentBlogData.map((post) => (
          <BlogPostTeaser key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostRecent;
