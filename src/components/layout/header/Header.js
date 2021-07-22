import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Logo from '../../common/Logo';
import Navigation from '../navigation/Navigation';

// API Query
const APIQuery = graphql`
  query APIHeaderQuery {
    wpgraphql {
      themeHeaderSettings {
        themeHeaderSettings {
          logo {
            altText
            sourceUrl
          }
          cta {
            text
            url
          }
        }
      }
      navigation: menus(where: { slug: "main-navigation" }) {
        nodes {
          id
          slug
          menuItems {
            nodes {
              id
              label
              path
              cssClasses
              acf {
                menusItemPartiallyActive
              }
            }
          }
        }
      }
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(APIQuery);
  const APIHeaderData = data.wpgraphql.themeHeaderSettings.themeHeaderSettings;
  const APIHeaderNavigationData =
    data.wpgraphql.navigation.nodes[0].menuItems.nodes;

  const [isOpen, setIsOpen] = useState(false);

  const isToggleButtonVisible = () => {
    const toggleButton = document.querySelector('.navigation-toggle');
    const toggleButtonVisibility = getComputedStyle(toggleButton).display;

    return toggleButtonVisibility === 'block';
  };

  const toggleNavigation = () => {
    // Check if toggle button is visible.
    // Because we don't need to toggle navigation if we are on large devices.
    if (isToggleButtonVisible()) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    document.body.classList.toggle('is-open', isOpen);
    return () => {
      document.body.classList.remove('is-open');
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="container">
          <div className="header__inner">
            <Logo logo={APIHeaderData.logo} />
            <Navigation
              items={APIHeaderNavigationData}
              isOpen={isOpen}
              toggleNavigation={toggleNavigation}
              cta={APIHeaderData.cta}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
