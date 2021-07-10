import { arrayOf, shape, string } from 'prop-types';
import postType from '../components/pages/blog/postType';
import blogPaginationType from '../components/pages/blog/blogPaginationType';
import seoType from '../components/common/seoType';

// Blog Category Template Type
export default {
  data: shape({
    wpgraphql: shape({
      themeGeneralSettings: shape({
        themeGeneralSettings: shape({
          pages: shape({
            blogTags: shape({
              slug: string.isRequired,
              metaSubHeading: string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      themeHeadingsSettings: shape({
        themeHeadingsSettings: shape({
          pages: shape({
            blogTags: shape({
              heading: string.isRequired,
              subHeading: string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      tag: shape({
        id: string.isRequired,
        name: string.isRequired,
        slug: string.isRequired,
        seo: shape({
          ...seoType,
        }).isRequired,
      }).isRequired,
      posts: shape({
        nodes: arrayOf(
          shape({
            ...postType,
          }).isRequired,
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: shape({ ...blogPaginationType }).isRequired,
};
