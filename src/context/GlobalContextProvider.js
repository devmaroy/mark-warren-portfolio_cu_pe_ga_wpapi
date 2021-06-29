import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import globalContextProviderType from '../types/context/globalContextProviderType';

// API Query
const APIQuery = graphql`
  query GlobalContextProviderQuery {
    wpgraphql {
      themeGeneralSettings {
        themeGeneralSettings {
          sections {
            portfolio {
              categoriesListingWord
              buttonText
              perPage
            }
          }
        }
      }
    }
  }
`;

export const GlobalContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const data = useStaticQuery(APIQuery);
  const { themeGeneralSettings } = data.wpgraphql.themeGeneralSettings;

  const providerData = { sections: themeGeneralSettings.sections };

  return (
    <GlobalContext.Provider value={providerData}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = { ...globalContextProviderType };

export default Object.assign(
  ({ element }) => <GlobalContextProvider>{element}</GlobalContextProvider>,
  { propTypes: { ...globalContextProviderType } },
);
