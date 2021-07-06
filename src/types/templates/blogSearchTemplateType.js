import { shape, string, number } from 'prop-types';

// Blog Search Template Type
export default {
  data: shape({
    wpgraphql: shape({
      themeGeneralSettings: shape({
        themeGeneralSettings: shape({
          pages: shape({
            blog: shape({
              perPage: number.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: shape({ search: string.isRequired }).isRequired,
};
