import { arrayOf, shape, string } from 'prop-types';
import postType from '../components/pages/blog/postType';

// Blog Template Type
export default {
  data: shape({
    wpgraphql: shape({
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
