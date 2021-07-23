import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/Layout';
import ErrorPage from '../components/common/ErrorPage';

// API Query
const APIQuery = graphql`
  query NotFoundPageQuery {
    wpgraphql {
      themeNotFoundPageSettings {
        themeNotFoundPageSettings {
          heading
          subHeading
          text
          nsocial {
            name
            type
            url
          }
        }
      }
      seoForPage(id: "cG9zdDo0MzA=") {
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

const NotFoundPage = () => {
  const data = useStaticQuery(APIQuery);
  const APINotFoundPageData =
    data.wpgraphql.themeNotFoundPageSettings.themeNotFoundPageSettings;
  const APINotFoundPageSEOData = data.wpgraphql.seoForPage;

  return (
    <Layout showPartials={false}>
      <ErrorPage
        heading={APINotFoundPageData.heading}
        subHeading={APINotFoundPageData.subHeading}
        social={APINotFoundPageData.nsocial}
        seo={APINotFoundPageSEOData}
      >
        {APINotFoundPageData.text}
      </ErrorPage>
    </Layout>
  );
};

export default NotFoundPage;
