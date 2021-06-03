// Create local link - it removes the full path and creates this style: /path
export const createLocalLink = (url, wordpressUrl) => {
  if (url === '#') {
    return url;
  }

  return url.replace(wordpressUrl, '');
};

// Check if provided url is external URL
export const isExternalLink = (url) =>
  url.indexOf('://') > 0 || url.indexOf('//') === 0;

// Check if provides url is external link (based on wordpress url)
// e.q. https://google.com will be matched as external link (true)
// but https://mywebsite.com/about-me not because it's our own website
export const isWordpressExternalLink = (url, wordpressUrl) =>
  url.indexOf(wordpressUrl) === -1 && isExternalLink(url);
