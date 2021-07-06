import React from 'react';
import { graphql } from 'gatsby';
import SubPage from '../components/common/SubPage';
import BlogPost from '../components/pages/blog/post/BlogPost';

const BlogPostTemplate = ({ data }) => (
  <SubPage className="post" classNameInner="post__inner">
    <BlogPost post={data.wpgraphql.post} />
  </SubPage>
);

// Template API Query
export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($id: ID!) {
    wpgraphql {
      post(id: $id) {
        id
        title
        slug
        content
        date
        featuredImage {
          node {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                gatsbyImageData(width: 1200, quality: 100)
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
        tags {
          nodes {
            id
            name
            slug
          }
        }
        acf {
          share {
            name
            quote
          }
          enableShare
        }
      }
    }
  }
`;

export default BlogPostTemplate;
