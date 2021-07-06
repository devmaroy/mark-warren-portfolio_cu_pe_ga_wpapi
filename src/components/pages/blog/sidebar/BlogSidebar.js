import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogSidebarRecentArticles from './BlogSidebarRecentArticles';
import BlogSidebarSearch from './BlogSidebarSearch';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarTags from './BlogSidebarTags';
import BlogSidebarNewsletter from './BlogSidebarNewsletter';
import BlogSidebarInstagramFeed from './BlogSidebarInstagramFeed';

// API Query
const APIQuery = graphql`
  query BlogSidebarQuery {
    wpgraphql {
      themeGeneralSettings {
        themeGeneralSettings {
          pages {
            blogSidebar {
              search {
                form {
                  placeholder
                  buttonIcon {
                    altText
                    sourceUrl
                  }
                }
                results {
                  limit
                  heading
                  buttonText
                  notFoundText
                }
              }
              newsletter {
                form {
                  placeholder
                  buttonText
                }
              }
            }
          }
        }
      }
      themeHeadingsSettings {
        themeHeadingsSettings {
          pages {
            blogSidebar {
              recentArticles {
                heading
              }
              search {
                heading
              }
              categories {
                heading
              }
              tags {
                heading
              }
              newsletter {
                heading
              }
              instagramFeed {
                heading
              }
            }
          }
        }
      }
      categories(where: { orderby: COUNT, order: DESC }) {
        nodes {
          id
          name
          slug
          count
        }
      }
      tags(where: { orderby: COUNT, order: DESC }) {
        nodes {
          id
          name
          slug
          count
        }
      }
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
                  gatsbyImageData(width: 660, quality: 100)
                }
              }
            }
          }
          categories {
            nodes {
              id
              name
              slug
              count
            }
          }
        }
      }
    }
  }
`;

const BlogSidebar = () => {
  const data = useStaticQuery(APIQuery);
  const APIBlogSidebarGeneralSettings =
    data.wpgraphql.themeGeneralSettings.themeGeneralSettings.pages.blogSidebar;
  const APIBlogSidebarHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.pages
      .blogSidebar;
  const blogSidebarRecentPostsData = data.wpgraphql.posts.nodes;
  const blogSidebarCategoriesData = data.wpgraphql.categories.nodes;
  const blogSidebarTagsData = data.wpgraphql.tags.nodes;

  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__layout">
        <BlogSidebarRecentArticles
          heading={APIBlogSidebarHeadingsData.recentArticles.heading}
          posts={blogSidebarRecentPostsData}
        />
        <BlogSidebarSearch
          heading={APIBlogSidebarHeadingsData.search.heading}
          form={APIBlogSidebarGeneralSettings.search.form}
          searchResultsLimit={
            APIBlogSidebarGeneralSettings.search.results.limit
          }
          searchResultsHeading={
            APIBlogSidebarGeneralSettings.search.results.heading
          }
          searchResultsLoadMoreText={
            APIBlogSidebarGeneralSettings.search.results.buttonText
          }
          searchResultsNotFoundText={
            APIBlogSidebarGeneralSettings.search.results.notFoundText
          }
        />
      </div>

      <div className="blog-sidebar__layout">
        <BlogSidebarCategories
          heading={APIBlogSidebarHeadingsData.categories.heading}
          categories={blogSidebarCategoriesData}
        />
        <BlogSidebarTags
          heading={APIBlogSidebarHeadingsData.tags.heading}
          tags={blogSidebarTagsData}
        />
      </div>

      <div className="blog-sidebar__layout">
        <BlogSidebarNewsletter
          heading={APIBlogSidebarHeadingsData.newsletter.heading}
          form={APIBlogSidebarGeneralSettings.newsletter.form}
        />
        <BlogSidebarInstagramFeed
          heading={APIBlogSidebarHeadingsData.instagramFeed.heading}
        />
      </div>
    </div>
  );
};

export default BlogSidebar;
