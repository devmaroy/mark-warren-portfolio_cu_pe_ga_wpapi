import { arrayOf, shape, string } from 'prop-types';
import postType from '../components/pages/blog/postType';
import seoType from '../components/common/seoType';

// Blog Template Type
export default {
  data: shape({
    wpgraphql: shape({
      seoForPage: shape({
        seo: shape({
          ...seoType,
        }).isRequired,
      }).isRequired,
      posts: shape({
        nodes: arrayOf(shape({ ...postType }).isRequried).isRequried,
      }).isRequired,
      themeHeadingsSettings: shape({
        themeHeadingsSettings: shape({
          pages: shape({
            blog: shape({
              heading: string.isRequired,
              subHeading: string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequried,
  }).isRequired,
};
