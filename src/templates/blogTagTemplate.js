import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GlobalContext } from '../context/GlobalContextProvider';
import SubPage from '../components/common/SubPage';
import SiteHeader from '../components/common/SiteHeader';
import BlogMain from '../components/pages/blog/BlogMain';
import BlogSidebar from '../components/pages/blog/sidebar/BlogSidebar';
import BlogSubHeading from '../components/pages/blog/BlogSubHeading';
import blogTagTemplateType from '../types/templates/blogTagTemplateType';

const BlogTagTemplate = ({ data, pageContext }) => {
  const APIBlogTagHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.pages.blogTags;
  const APIBlogTagSettingsData =
    data.wpgraphql.themeGeneralSettings.themeGeneralSettings.pages.blogTags;
  const APIBlogTagData = data.wpgraphql.tag;
  const APIBlogTagPostsData = data.wpgraphql.posts.nodes;

  const globalContextData = useContext(GlobalContext);
  const { slug: tagSlug } = globalContextData.pages.blogTags;

  const pagination = {
    totalPages: pageContext.totalPages,
    currentPage: pageContext.currentPage,
    slug: `${tagSlug}/${APIBlogTagData.slug}`,
  };

  return (
    <SubPage
      seo={APIBlogTagData}
      className="blog blog-categories"
      classNameInner="blog blog-categories__inner"
    >
      <SiteHeader
        heading={APIBlogTagHeadingsData.heading}
        subHeading={APIBlogTagHeadingsData.subHeading}
      />
      <div className="blog__content">
        <div className="blog__layout">
          <div>
            <BlogSubHeading
              heading={APIBlogTagSettingsData.metaSubHeading}
              highlight={APIBlogTagData.name}
            />
            <BlogMain posts={APIBlogTagPostsData} pagination={pagination} />
          </div>

          <BlogSidebar />
        </div>
      </div>
    </SubPage>
  );
};

// Template API Query
export const BlogTagTemplateQuery = graphql`
  query BlogTagTemplateQuery(
    $id: ID!
    $dbId: String
    $skip: Int!
    $limit: Int!
  ) {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          pages {
            blogTags {
              heading
              subHeading
            }
          }
        }
      }
      themeGeneralSettings {
        themeGeneralSettings {
          pages {
            blogTags {
              slug
              metaSubHeading
            }
          }
        }
      }
      tag(id: $id) {
        id
        name
        slug
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
            raw
          }
        }
      }
      posts(
        where: {
          tagId: $dbId
          offsetPagination: { offset: $skip, size: $limit }
          orderby: { field: DATE, order: DESC }
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
                  gatsbyImageData(
                    width: 1200
                    quality: 90
                    placeholder: BLURRED
                  )
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
        }
      }
    }
  }
`;

BlogTagTemplate.propTypes = {
  ...blogTagTemplateType,
};

export default BlogTagTemplate;

// <Timeline>
//             <div>
//               <BlogSubHeading
//                 heading={APIBlogTagSettingsData.metaSubHeading}
//                 highlight={APIBlogTagData.name}
//               />

//               <BlogMain posts={APIBlogTagPostsData} pagination={pagination} />
//             </div>

//             <BlogSidebar />
//           </Timeline>
