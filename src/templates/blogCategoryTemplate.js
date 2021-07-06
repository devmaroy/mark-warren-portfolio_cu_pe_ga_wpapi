import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GlobalContext } from '../context/GlobalContextProvider';
import SubPage from '../components/common/SubPage';
import SiteHeader from '../components/common/SiteHeader';
import BlogMain from '../components/pages/blog/BlogMain';
import BlogSidebar from '../components/pages/blog/sidebar/BlogSidebar';
import BlogSubHeading from '../components/pages/blog/BlogSubHeading';
import blogCategoryTemplateType from '../types/templates/blogCategoryTemplateType';

const BlogCategoryTemplate = ({ data, pageContext }) => {
  const APIBlogCategoryHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.pages
      .blogCategories;
  const APIBlogCategorySettingsData =
    data.wpgraphql.themeGeneralSettings.themeGeneralSettings.pages
      .blogCategories;
  const APIBlogCategoryData = data.wpgraphql.category;
  const APIBlogCategoryPostsData = data.wpgraphql.posts.nodes;

  const globalContextData = useContext(GlobalContext);
  const { slug: categorySlug } = globalContextData.pages.blogCategories;

  const pagination = {
    totalPages: pageContext.totalPages,
    currentPage: pageContext.currentPage,
    slug: `${categorySlug}/${APIBlogCategoryData.slug}`,
  };

  return (
    <SubPage
      className="blog blog-categories"
      classNameInner="blog blog-categories__inner"
    >
      <SiteHeader
        heading={APIBlogCategoryHeadingsData.heading}
        subHeading={APIBlogCategoryHeadingsData.subHeading}
      />
      <div className="blog__content">
        <div className="blog__layout">
          <div>
            <BlogSubHeading
              heading={APIBlogCategorySettingsData.metaSubHeading}
              highlight={APIBlogCategoryData.name}
            />

            <BlogMain
              posts={APIBlogCategoryPostsData}
              pagination={pagination}
            />
          </div>

          <BlogSidebar />
        </div>
      </div>
    </SubPage>
  );
};

// Template API Query
export const BlogCategoryTemplateQuery = graphql`
  query BlogCategoryTemplateQuery(
    $id: ID!
    $dbID: Int!
    $skip: Int!
    $limit: Int!
  ) {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          pages {
            blogCategories {
              heading
              subHeading
            }
          }
        }
      }
      themeGeneralSettings {
        themeGeneralSettings {
          pages {
            blogCategories {
              slug
              metaSubHeading
            }
          }
        }
      }
      category(id: $id) {
        id
        name
        slug
      }
      posts(
        where: {
          categoryId: $dbID
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

BlogCategoryTemplate.propTypes = {
  ...blogCategoryTemplateType,
};

export default BlogCategoryTemplate;
