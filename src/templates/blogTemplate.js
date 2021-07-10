import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GlobalContext } from '../context/GlobalContextProvider';
import SubPage from '../components/common/SubPage';
import SiteHeader from '../components/common/SiteHeader';
import BlogMain from '../components/pages/blog/BlogMain';
import BlogSidebar from '../components/pages/blog/sidebar/BlogSidebar';
import blogTemplateType from '../types/templates/blogTemplateType';

const BlogTemplate = ({ data, pageContext }) => {
  const APIBlogHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.pages.blog;
  const APIBlogData = data.wpgraphql.posts.nodes;
  const APIBlogSEOData = data.wpgraphql.seoForPage;

  const globalContextData = useContext(GlobalContext);
  const { slug: blogSlug } = globalContextData.pages.blog;

  const pagination = {
    totalPages: pageContext.totalPages,
    currentPage: pageContext.currentPage,
    slug: blogSlug,
  };

  return (
    <SubPage seo={APIBlogSEOData} className="blog" classNameInner="blog__inner">
      <SiteHeader
        heading={APIBlogHeadingsData.heading}
        subHeading={APIBlogHeadingsData.subHeading}
      />

      <div className="blog__content">
        <div className="blog__layout">
          <BlogMain posts={APIBlogData} pagination={pagination} />
          <BlogSidebar />
        </div>
      </div>
    </SubPage>
  );
};

// Template API Query
export const BlogTemplateQuery = graphql`
  query BlogTemplateQuery($skip: Int!, $limit: Int!) {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          pages {
            blog {
              heading
              subHeading
            }
          }
        }
      }
      seoForPage(id: "cG9zdDozNjc=") {
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
      posts(
        where: {
          orderby: { field: DATE, order: DESC }
          offsetPagination: { offset: $skip, size: $limit }
        }
      ) {
        nodes {
          id
          title
          slug
          excerpt
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
        }
      }
    }
  }
`;

BlogTemplate.propTypes = {
  ...blogTemplateType,
};

export default BlogTemplate;
