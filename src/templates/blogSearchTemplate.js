import React from 'react';
import { navigate, graphql } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';
import algoliaSearchClientSettings from '../utils/algoliaSearchClientSettings';
import SubPage from '../components/common/SubPage';
import SiteHeader from '../components/common/SiteHeader';
import BlogSearchPosts from '../components/pages/blog/search/BlogSearchPosts';
import BlogSearchPagination from '../components/pages/blog/search/BlogSearchPagination';
import BlogSidebar from '../components/pages/blog/sidebar/BlogSidebar';
import BlogSubHeading from '../components/pages/blog/BlogSubHeading';
import blogSearchTemplateType from '../types/templates/blogSearchTemplateType';

const BlogSearchTemplate = ({ data, location }) => {
  const APIBlogSearchHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.pages.search;
  const APIBlogSearchData =
    data.wpgraphql.themeGeneralSettings.themeGeneralSettings.pages;
  const searchQuery = new URLSearchParams(location.search).get('q') || '';
  const searchClient = algoliasearch(...algoliaSearchClientSettings);

  // Check if we have search query
  if (!searchQuery && typeof window !== `undefined`) {
    navigate('/');
  }

  return (
    <SubPage
      className="blog blog-search"
      classNameInner="blog blog-search__inner"
    >
      <SiteHeader
        heading={APIBlogSearchHeadingsData.heading}
        subHeading={APIBlogSearchHeadingsData.subHeading}
      />
      <div className="blog__content">
        <div className="blog__layout">
          <div>
            <BlogSubHeading
              heading={APIBlogSearchData.search.metaSubHeading}
              highlight={searchQuery}
            />
            <InstantSearch searchClient={searchClient} indexName="blog">
              <Configure
                query={searchQuery}
                hitsPerPage={APIBlogSearchData.blog.perPage}
              />
              <BlogSearchPosts perPage={APIBlogSearchData.blog.perPage} />

              <BlogSearchPagination
                wrapper={(children) => (
                  <div className="blog__pagination">{children}</div>
                )}
              />
            </InstantSearch>
          </div>

          <BlogSidebar />
        </div>
      </div>
    </SubPage>
  );
};

// Template API Query
export const BlogSearchTemplateQuery = graphql`
  query BlogSearchTemplateQuery {
    wpgraphql {
      themeGeneralSettings {
        themeGeneralSettings {
          pages {
            blog {
              perPage
            }
            search {
              metaSubHeading
            }
          }
        }
      }
      themeHeadingsSettings {
        themeHeadingsSettings {
          pages {
            search {
              heading
              subHeading
            }
          }
        }
      }
    }
  }
`;

BlogSearchTemplate.propTypes = {
  ...blogSearchTemplateType,
};

export default BlogSearchTemplate;
