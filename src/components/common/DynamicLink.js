/* eslint-disable import/no-unresolved */
import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import dynamicLinkType from '../../types/components/common/dynamicLinkType';
import { isWordpressExternalLink, createLocalLink } from '../../utils/link';

// API Query
const APIQuery = graphql`
  query APIDynamicLinkQuery {
    wpgraphql {
      generalSettings {
        url
      }
    }
  }
`;

const DynamicLink = ({
  to,
  onClick,
  className = '',
  activeClassName = '',
  partiallyActive = false,
  children,
}) => {
  const data = useStaticQuery(APIQuery);
  const dynamicLinkData = data.wpgraphql.generalSettings;
  const { url: wordpressUrl } = dynamicLinkData;
  const location = useLocation();

  const dynamicLinkClassName = 'dynamic-link';
  const dynamicLinkClassNameActive = 'dynamic-link--active';

  // Helper function for rendering a link.
  const renderLink = () => {
    // e.g. facebook.com/handle
    const isExternalLink = isWordpressExternalLink(to, wordpressUrl);

    // e.g. example.com#services
    const isLocalLinkWithHash = to.includes('#') && location.pathname === '/';

    // e.g. example.com/blog#services
    const isSubpageLocalLinkWithHash =
      to.includes('#') && location.pathname !== '/';

    // Check if the link is an external url.
    if (isExternalLink) {
      return (
        <a
          className={`${dynamicLinkClassName} ${className}`}
          href={to}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    if (isLocalLinkWithHash) {
      return (
        <ScrollLink
          to={to.substring(1)}
          smooth
          offset={-180}
          duration={500}
          className={`${dynamicLinkClassName} ${className}`}
          activeClass={`${dynamicLinkClassNameActive} ${activeClassName}`}
          onClick={onClick}
        >
          {children}
        </ScrollLink>
      );
    }

    if (isSubpageLocalLinkWithHash) {
      return (
        <AnchorLink
          to={to.charAt(0) === '#' ? `/${to}` : to}
          className={`${dynamicLinkClassName} ${className}`}
          onClick={onClick}
        >
          {children}
        </AnchorLink>
      );
    }

    // e.q. example.com/services
    // but also example.com/services/1 will be highlighted
    if (partiallyActive) {
      return (
        <Link
          to={createLocalLink(to, wordpressUrl)}
          partiallyActive={partiallyActive}
          className={`${dynamicLinkClassName} ${className}`}
          activeClassName={`${dynamicLinkClassNameActive} ${activeClassName}`}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }

    // e.q. example.com/services
    return (
      <Link
        to={createLocalLink(to, wordpressUrl)}
        className={`${dynamicLinkClassName} ${className}`}
        activeClassName={`${dynamicLinkClassNameActive} ${activeClassName}`}
        onClick={onClick}
        partiallyActive={false}
      >
        {children}
      </Link>
    );
  };

  return <>{renderLink()}</>;
};

DynamicLink.propTypes = {
  ...dynamicLinkType,
};

export default DynamicLink;
