/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SubPage from '../components/common/SubPage';
import pageTemplateType from '../types/templates/pageTemplateType';

const PageTemplate = ({ data }) => {
  const APIPageData = data.wpgraphql.page;
  const featuredImage = APIPageData.featuredImage.node;
  const { content } = data.wpgraphql.page;
  const { showFeaturedImage } = data.wpgraphql.page.acf;

  return (
    <SubPage seo={APIPageData} className="page" classNameInner="page__inner">
      {showFeaturedImage && (
        <div className="page__featured-image">
          <GatsbyImage
            image={featuredImage.imageFile.childImageSharp.gatsbyImageData}
            alt={featuredImage.altText}
          />
        </div>
      )}

      <div
        className="text text-full page__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </SubPage>
  );
};

// Template API Query
export const PageTemplateQuery = graphql`
  query PageTemplateQuery($id: ID!) {
    wpgraphql {
      page(id: $id) {
        id
        slug
        title
        content
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
        acf {
          showFeaturedImage
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

PageTemplate.propTypes = {
  ...pageTemplateType,
};

export default PageTemplate;
