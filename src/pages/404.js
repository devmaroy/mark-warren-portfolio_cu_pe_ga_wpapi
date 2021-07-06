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
        }
      }
    }
  }
`;

const NotFoundPage = () => {
  const data = useStaticQuery(APIQuery);
  const APINotFoundPageData =
    data.wpgraphql.themeNotFoundPageSettings.themeNotFoundPageSettings;
  const APINotFoundPageSEOData = {};

  return (
    <Layout showPartials={false}>
      <ErrorPage
        heading={APINotFoundPageData.heading}
        subHeading={APINotFoundPageData.subHeading}
        seo={APINotFoundPageSEOData}
      >
        {APINotFoundPageData.text}
      </ErrorPage>
    </Layout>
  );
};

export default NotFoundPage;
