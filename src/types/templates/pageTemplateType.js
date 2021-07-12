import { shape, string, bool } from 'prop-types';
import seoType from '../components/common/seoType';
import imageType from '../components/common/imageType';

// Page Template Type
export default {
  data: shape({
    wpgraphql: shape({
      page: shape({
        id: string.isRequired,
        slug: string.isRequired,
        title: string.isRequired,
        content: string.isRequired,
        featuredImage: shape({
          node: shape({
            altText: string.isRequired,
            sourceUrl: string.isRequired,
            imageFile: shape({
              childImageSharp: shape({ ...imageType }).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
        acf: shape({
          showFeaturedImage: bool,
        }),
        seo: shape({
          ...seoType,
        }),
      }).isRequired,
    }).isRequried,
  }).isRequired,
};
