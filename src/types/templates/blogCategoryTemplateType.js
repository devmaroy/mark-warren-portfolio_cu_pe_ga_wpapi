import { arrayOf, shape, string } from 'prop-types';
import postType from '../components/pages/blog/postType';
import blogPaginationType from '../components/pages/blog/blogPaginationType';

// Blog Category Template Type
export default {
  data: shape({
    wpgraphql: shape({
      themeGeneralSettings: shape({
        themeGeneralSettings: shape({
          pages: shape({
            blogCategories: shape({
              slug: string.isRequired,
              metaSubHeading: string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      themeHeadingsSettings: shape({
        themeHeadingsSettings: shape({
          pages: shape({
            blogCategories: shape({
              heading: string.isRequired,
              subHeading: string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      category: shape({
        id: string.isRequired,
        name: string.isRequired,
        slug: string.isRequired,
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
