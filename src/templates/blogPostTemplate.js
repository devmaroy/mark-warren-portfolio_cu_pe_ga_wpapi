import React from 'react';
import { graphql } from 'gatsby';
import SubPage from '../components/common/SubPage';
import BlogPost from '../components/pages/blog/post/BlogPost';
import blogPostTemplateType from '../types/templates/blogPostTemplateType';

const BlogPostTemplate = ({ data }) => {
  const blogPostData = data.wpgraphql.post;
  const generalPostData =
    data.wpgraphql.themeGeneralSettings.themeGeneralSettings.pages.post;

  return (
    <SubPage seo={blogPostData} className="post" classNameInner="post__inner">
      <BlogPost
        post={blogPostData}
        recentArticlesHeading={generalPostData.recentArticlesHeading}
        shareHeading={generalPostData.shareHeading}
      />
    </SubPage>
  );
};

// Template API Query
export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($id: ID!) {
    wpgraphql {
      themeGeneralSettings {
        themeGeneralSettings {
          pages {
            post {
              recentArticlesHeading
              shareHeading
            }
          }
        }
      }
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
                gatsbyImageData(width: 1200, quality: 90, placeholder: BLURRED)
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
        seo {
          title
          metaDesc
          focuskw
          metaKeywords
          metaRobotsNoindex
          metaRobotsNofollow
          opengraphTitle
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            srcSet
          }
          twitterTitle
          twitterDescription
          twitterImage {
            altText
            sourceUrl
            srcSet
          }
          canonical
          cornerstone
          schema {
            articleType
            pageType
            raw
          }
        }
      }
    }
  }
`;

BlogPostTemplate.propTypes = {
  ...blogPostTemplateType,
};

export default BlogPostTemplate;
