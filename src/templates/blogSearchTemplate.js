import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';
import algoliaSearchClientSettings from '../utils/algoliaSearchClientSettings';
import { GlobalContext } from '../context/GlobalContextProvider';
import NotFoundPage from '../pages/404';
import SubPage from '../components/common/SubPage';
import SiteHeader from '../components/common/SiteHeader';
import BlogSearchResults from '../components/pages/blog/search/BlogSearchResults';
import BlogSearchPagination from '../components/pages/blog/search/BlogSearchPagination';
import BlogSidebar from '../components/pages/blog/sidebar/BlogSidebar';
import BlogSubHeading from '../components/pages/blog/BlogSubHeading';
import isBrowser from '../utils/isBrowser';
import blogSearchTemplateType from '../types/templates/blogSearchTemplateType';

const BlogSearchTemplate = ({ data, location }) => {
  const APIBlogSearchHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.pages.search;
  const APIBlogSearchGeneralData =
    data.wpgraphql.themeGeneralSettings.themeGeneralSettings.pages;
  const APIBlogSearchSEOData = data.wpgraphql.seoForPage;
  const searchQuery = new URLSearchParams(location.search).get('q') || '';
  const searchClient = algoliasearch(...algoliaSearchClientSettings);
  const { pages: contextPagesSettings } = useContext(GlobalContext);

  // Check if we are on the browser - so we can have a location.
  if (isBrowser()) {
    // Check if we have search query.
    if (!searchQuery) {
      return <NotFoundPage />;
    }

    return (
      <SubPage
        className="blog blog-search"
        classNameInner="blog blog-search__inner"
        seo={APIBlogSearchSEOData}
      >
        <SiteHeader
          heading={APIBlogSearchHeadingsData.heading}
          subHeading={APIBlogSearchHeadingsData.subHeading}
        />
        <div className="blog__content">
          <div className="blog__layout">
            <div>
              <BlogSubHeading
                heading={APIBlogSearchGeneralData.search.metaSubHeading}
                highlight={searchQuery}
              />

              <InstantSearch
                searchClient={searchClient}
                indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
              >
                <Configure
                  query={searchQuery}
                  hitsPerPage={APIBlogSearchGeneralData.blog.perPage}
                />

                <BlogSearchResults
                  buttonText={contextPagesSettings.blog.buttonText}
                  loadingIcon={APIBlogSearchGeneralData.search.loadingIcon}
                  notFoundMessage={
                    APIBlogSearchGeneralData.search.notFoundMessage
                  }
                />

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
  }

  return null;
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
              notFoundMessage
              loadingIcon {
                altText
                sourceUrl
              }
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
      seoForPage(id: "cG9zdDo0MzE=") {
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

BlogSearchTemplate.propTypes = {
  ...blogSearchTemplateType,
};

export default BlogSearchTemplate;
