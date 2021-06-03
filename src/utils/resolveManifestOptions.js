const resolveManifestOptions = async (graphql) => {
  const result = await graphql(`
    query {
      wpgraphql {
        themeManifestSettings {
          themeSettingsManifest {
            tsManifestName
            tsManifestShortName
            tsManifestStartUrl
            tsManifestBackgroundColor
            tsManifestThemeColor
            tsManifestDisplay
            tsManifestIcon {
              altText
              sourceUrl
              imageFile {
                absolutePath
              }
            }
            tsManifestCrossorigin
            tsManifestIconOptions {
              tsManifestIconOptionsPurpose
            }
            tsManifestLegacy
          }
        }
      }
    }
  `);

  const data =
    result.data.wpgraphql.themeManifestSettings.themeSettingsManifest;

  const manifestOptions = {
    name: data.tsManifestName,
    short_name: data.tsManifestShortName,
    start_url: data.tsManifestStartUrl,
    background_color: data.tsManifestBackgroundColor,
    theme_color: data.tsManifestThemeColor,
    // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    display: data.tsManifestDisplay,
    icon: `${data.tsManifestIcon.imageFile.absolutePath}`, // This path is relative to the root of the site.
    // An optional attribute which provides support for CORS check.
    // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    // Any invalid keyword or empty string defaults to `anonymous`
    crossOrigin: data.tsManifestCrossorigin,
    icon_options: {
      // For all the options available, please see:
      // https://developer.mozilla.org/en-US/docs/Web/Manifest
      // https://w3c.github.io/manifest/#purpose-member
      purpose: data.tsManifestIconOptions.tsManifestIconOptionsPurpose,
    },
    legacy: data.tsManifestLegacy,
  };

  return manifestOptions;
};

module.exports = resolveManifestOptions;
