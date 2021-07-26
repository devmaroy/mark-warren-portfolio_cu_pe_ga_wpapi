const resolveManifestOptions = async (graphql) => {
  const result = await graphql(`
    query {
      wpgraphql {
        themeManifestSettings {
          themeManifestSettings {
            name
            shortName
            startUrl
            backgroundColor
            themeColor
            display
            icon {
              altText
              sourceUrl
              imageFile {
                absolutePath
              }
            }
            crossorigin
            iconOptions {
              purpose
            }
            legacy
          }
        }
      }
    }
  `);

  const data =
    result.data.wpgraphql.themeManifestSettings.themeManifestSettings;

  const manifestOptions = {
    name: data.name,
    short_name: data.shortName,
    start_url: data.startUrl,
    background_color: data.backgroundColor,
    theme_color: data.themeColor,
    // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    display: data.display,
    icon: `${data.icon.imageFile.absolutePath}`, // This path is relative to the root of the site.
    // An optional attribute which provides support for CORS check.
    // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    // Any invalid keyword or empty string defaults to `anonymous`
    crossOrigin: data.crossorigin,
    icon_options: {
      // For all the options available, please see:
      // https://developer.mozilla.org/en-US/docs/Web/Manifest
      // https://w3c.github.io/manifest/#purpose-member
      purpose: data.iconOptions.purpose,
    },
    legacy: data.legacy,
  };

  return manifestOptions;
};

module.exports = resolveManifestOptions;
