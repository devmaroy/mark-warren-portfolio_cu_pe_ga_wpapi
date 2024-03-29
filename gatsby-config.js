// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const blogSearchQuery = `
  {
    wpgraphql {
      themeGeneralSettings {
        themeGeneralSettings {
          pages {
            blog {
              slug
            }
          }
        }
      }
      posts(
        where: {
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
                  gatsbyImageData(width: 1200, quality: 90, placeholder: BLURRED)
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

const queries = [
  {
    query: blogSearchQuery,
    transformer: ({ data }) =>
      data.wpgraphql.posts.nodes.map((post) => {
        const prefix =
          data.wpgraphql.themeGeneralSettings.themeGeneralSettings.pages.blog
            .slug;

        const dateTimestamp = Math.floor(new Date(post.date) / 1000);

        return { ...post, prefix, dateTimestamp };
      }),
  },
];

module.exports = {
  siteMetadata: {
    lang: 'en',
    locale: 'en_US',
    title: 'Mark Warren: Personal web developer portfolio',
    titleSimplified: 'Mark Warren',
    description: 'Personal web developer portfolio',
    author: 'markwarren',
    twitterHandle: '@markwarren',
    email: 'hello@markwarren.com',
    siteUrl: 'https://markwarrenportfolio.marekmatejovic.com/',
    siteName: 'Personal web developer portfolio',
    image: '/images/social/social.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-anchor-links',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ['node_modules/normalize-scss/sass'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /social/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'WPGraphQL',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'wpgraphql',
        // Url to query from
        url: process.env.GATSBY_API_URL,
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      // This options prop will be overriden inside gatsby-node.js via resolveManifestOptions.js
      options: {
        name: 'Mark Warren: Personal web developer portfolio',
        short_name: 'Personal web developer portfolio',
        start_url: '/',
        background_color: '#2fe6a3',
        theme_color: '#FFFFFF',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: `${__dirname}/src/images/favicons/favicon.png`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: 'use-credentials',
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: 'maskable',
        },
        legacy: true,
      },
    },
  ],
};
