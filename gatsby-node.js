// TODO: Remove After!
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Gatsby with WPGraphQL, ACF and Gatbsy-Image
// https://dev.to/nevernull/gatsby-with-wpgraphql-acf-and-gatbsy-image-72m
//
// We need to do this if we want to use Gatsby Img component with wpgraphql.
//
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: 'File',
        async resolve(source) {
          let { sourceUrl } = source;

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl;
          }

          return createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};
