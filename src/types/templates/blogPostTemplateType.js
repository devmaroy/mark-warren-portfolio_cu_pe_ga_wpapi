import { shape, string } from 'prop-types';
import postType from '../components/pages/blog/postType';

// Blog Template Type
export default {
  data: shape({
    wpgraphql: shape({
      themeGeneralSettings: shape({
        themeGeneralSettings: shape({
          pages: shape({
            post: shape({
              recentArticlesHeading: string.isRequried,
            }).isRequried,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      post: shape({ ...postType }).isRequired,
    }).isRequried,
  }).isRequired,
};
