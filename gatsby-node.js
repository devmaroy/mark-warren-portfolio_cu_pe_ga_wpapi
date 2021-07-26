if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const path = require('path');
const slugify = require('slugify');
const resolveManifestOptions = require('./src/utils/resolveManifestOptions');

const slugifySettings = {
  lower: true,
  strict: true,
};

const generateSlug = (prefix, page) => {
  const slugifiedPrefix =
    prefix &&
    slugify(prefix.replace(/^\/|\/$/g, ''), {
      remove: /[*+~.()'"!:@]/g,
    });

  const slugifiedPage = page && slugify(page, slugifySettings);

  if (slugifiedPrefix && slugifiedPage) {
    return `${slugifiedPrefix}/${slugifiedPage}`;
  }

  if (slugifiedPrefix && !slugifiedPage) {
    return `${slugifiedPrefix}`;
  }

  return `${slugifiedPage}`;
};

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

// Generate Dynamic Pages
//
//
exports.createPages = async ({ graphql, actions, reporter, store }) => {
  const { createPage, createRedirect } = actions;
  const state = store.getState();

  //

  /* Generate Site Manifest (Favicon) */

  const plugin = state.flattenedPlugins.find(
    (pluginToFind) => pluginToFind.name === 'gatsby-plugin-manifest',
  );
  if (plugin) {
    const manifestOptions = await resolveManifestOptions(graphql);

    plugin.pluginOptions = { ...plugin.pluginOptions, ...manifestOptions };
  }

  /* END Generate Site Manifest (Favicon) */

  //

  /* Get Results */
  const results = await graphql(`
    query {
      wpgraphql {
        themeGeneralSettings {
          themeGeneralSettings {
            pages {
              blog {
                slug
                perPage
              }
              post {
                slug
              }
              blogCategories {
                slug
                perPage
              }
              blogTags {
                slug
                perPage
              }
              search {
                slug
              }
              page {
                slug
              }
            }
          }
        }
        posts {
          nodes {
            id
            slug
          }
        }
        categories {
          nodes {
            id
            databaseId
            slug
            count
          }
        }
        tags {
          nodes {
            id
            databaseId
            slug
            count
          }
        }
        pages {
          nodes {
            id
            slug
          }
        }
      }
    }
  `);
  /* END Get Results */

  //

  // Check if we have errors
  if (results.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
  }

  //

  /* Templates */
  const blogTemplate = path.resolve('src/templates/blogTemplate.js');
  const blogSearchTemplate = path.resolve(
    'src/templates/blogSearchTemplate.js',
  );
  const blogCategoryTemplate = path.resolve(
    'src/templates/blogCategoryTemplate.js',
  );
  const blogTagTemplate = path.resolve('src/templates/blogTagTemplate.js');
  const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.js');
  const pageTemplate = path.resolve('src/templates/pageTemplate.js');
  /* END Templates */

  //

  /* Data */
  const { themeGeneralSettings } = results.data.wpgraphql.themeGeneralSettings;
  const blogSettings = themeGeneralSettings.pages.blog;
  const blogPostSettings = themeGeneralSettings.pages.post;
  const blogCategoriesSettings = themeGeneralSettings.pages.blogCategories;
  const blogTagsSettings = themeGeneralSettings.pages.blogTags;
  const searchSettings = themeGeneralSettings.pages.search;
  const pageSettings = themeGeneralSettings.pages.page;
  const posts = results.data.wpgraphql.posts.nodes;
  const categories = results.data.wpgraphql.categories.nodes;
  const tags = results.data.wpgraphql.tags.nodes;
  const pages = results.data.wpgraphql.pages.nodes;

  /* END Data */

  //

  /* Generate Dynamic Paginated Posts */
  const paginatedPostsSlug = blogSettings.slug;
  const paginatedPostsPerPage = blogSettings.perPage;
  const paginatedPostsTotal = Math.ceil(posts.length / paginatedPostsPerPage);
  const paginatedPostsCompleteSlug = generateSlug(
    paginatedPostsSlug,
    undefined,
  );

  createRedirect({
    fromPath: `/${paginatedPostsCompleteSlug}/1`,
    toPath: `/${paginatedPostsCompleteSlug}`,
    isPermanent: false,
    redirectInBrowser: true,
  });

  Array.from({ length: paginatedPostsTotal }).forEach((_, i) => {
    createPage({
      path:
        i === 0
          ? paginatedPostsCompleteSlug
          : `/${paginatedPostsCompleteSlug}/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: paginatedPostsPerPage,
        skip: i * paginatedPostsPerPage,
        totalPages: paginatedPostsTotal,
        currentPage: i + 1,
      },
    });
  });

  /* END Generate Dynamic Paginated Posts */

  //

  /* Generate Dynamic Posts */
  posts.forEach(({ id, slug }) => {
    const postSlug = blogPostSettings.slug;
    const postCompleteSlug = generateSlug(postSlug, undefined);

    createPage({
      path: `${postCompleteSlug}/${slug}`,
      component: blogPostTemplate,
      context: {
        id,
        slug,
      },
    });
  });
  /* END Generate Dynamic Posts */

  //

  /* Generate Dynamic Paginated Post Categories */
  categories.forEach(({ id, databaseId, slug, count }) => {
    const paginatedPostCategoriesSlug = blogCategoriesSettings.slug;
    const paginatedPostCategoriesPerPage = blogCategoriesSettings.perPage;
    const paginatedPostCategoriesTotal = Math.ceil(
      count / paginatedPostCategoriesPerPage,
    );
    const paginatedPostCategoriesCompleteSlug = generateSlug(
      paginatedPostCategoriesSlug,
      slug,
    );

    createRedirect({
      fromPath: `/${paginatedPostCategoriesCompleteSlug}/1`,
      toPath: `/${paginatedPostCategoriesCompleteSlug}`,
      isPermanent: false,
      redirectInBrowser: true,
    });

    Array.from({ length: paginatedPostCategoriesTotal }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? paginatedPostCategoriesCompleteSlug
            : `${paginatedPostCategoriesCompleteSlug}/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          id,
          dbID: databaseId,
          slug,
          limit: paginatedPostCategoriesPerPage,
          skip: i * paginatedPostCategoriesPerPage,
          totalPages: paginatedPostCategoriesTotal,
          currentPage: i + 1,
        },
      });
    });
  });
  /* END Generate Dynamic Paginated Post Categories */

  //

  /* Generate Dynamic Paginated Post Tags */
  tags.forEach(({ id, slug, count }) => {
    const paginatedPostTagsSlug = blogTagsSettings.slug;
    const paginatedPostTagsPerPage = blogTagsSettings.perPage;
    const paginatedPostTagsTotal = Math.ceil(count / paginatedPostTagsPerPage);
    const paginatedPostTagsCompleteSlug = generateSlug(
      paginatedPostTagsSlug,
      slug,
    );

    createRedirect({
      fromPath: `/${paginatedPostTagsCompleteSlug}/1`,
      toPath: `/${paginatedPostTagsCompleteSlug}`,
      isPermanent: false,
      redirectInBrowser: true,
    });

    Array.from({ length: paginatedPostTagsTotal }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? paginatedPostTagsCompleteSlug
            : `${paginatedPostTagsCompleteSlug}/${i + 1}`,
        component: blogTagTemplate,
        context: {
          id,
          $dbId: id,
          slug,
          limit: paginatedPostTagsPerPage,
          skip: i * paginatedPostTagsPerPage,
          totalPages: paginatedPostTagsTotal,
          currentPage: i + 1,
        },
      });
    });
  });

  /* END Generate Dynamic Paginated Post Tags */

  //

  /* Generate Dynamic Search Page */
  const searchPageSlug = searchSettings.slug;
  const searchPageCompleteSlug = generateSlug(searchPageSlug, undefined);

  createPage({
    path: searchPageCompleteSlug,
    component: blogSearchTemplate,
  });
  /* END Generate Dynamic Search Page */

  //

  /* Generate Pages */
  pages.forEach(({ id, slug }) => {
    const pageSlug = pageSettings.slug;
    const pageCompleteSlug = generateSlug(undefined, pageSlug);

    createPage({
      path: `${pageCompleteSlug}/${slug}`,
      component: pageTemplate,
      context: {
        id,
        slug,
      },
    });
  });
  /* END Generate Pages */
};
