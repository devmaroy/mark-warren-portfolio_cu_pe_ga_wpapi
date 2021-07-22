import { graphql, useStaticQuery } from 'gatsby';

// API Query
const APIQuery = graphql`
  query InstagramFeedMockQuery {
    wpgraphql {
      instagramFeedMocks(where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          acf {
            image {
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
            link
          }
        }
      }
    }
  }
`;

const InstagramFeedMock = ({ children }) => {
  const data = useStaticQuery(APIQuery);
  const APIInstagramFeedMockData = data.wpgraphql.instagramFeedMocks.nodes;

  return (
    APIInstagramFeedMockData &&
    APIInstagramFeedMockData.length !== 0 &&
    children(APIInstagramFeedMockData)
  );
};

export default InstagramFeedMock;
