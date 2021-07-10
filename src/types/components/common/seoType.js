import { string, bool, arrayOf, shape } from 'prop-types';

// SEO Type
export default {
  title: string,
  metaDesc: string,
  focuskw: string,
  metaKeywords: string,
  metaRobotsNoindex: string,
  metaRobotsNofollow: string,
  opengraphTitle: string,
  opengraphDescription: string,
  opengraphImage: shape({
    altText: string,
    sourceUrl: string,
    srcSet: string,
  }),
  twitterTitle: string,
  twitterDescription: string,
  twitterImage: shape({
    altText: string,
    sourceUrls: string,
    srcSet: string,
  }),
  canonical: string,
  cornerstone: bool,
  schema: shape({
    articleType: arrayOf(string),
    pageType: arrayOf(string),
    raw: string,
  }),
};
