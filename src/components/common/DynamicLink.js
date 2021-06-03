/* eslint-disable import/no-unresolved */
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from '@reach/router';
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

  // Helper function for rendering a link.
  const renderLink = () => {
    // e.g. example.com#services
    const isLocalLinkWithHash = to.includes('#') && location.pathname === '/';

    // e.g. example.com/blog#services
    const isSubpageLocalLinkWithHash =
      (to.includes('#') && location.pathname !== '/') ||
      isWordpressExternalLink(to, wordpressUrl);

    if (isLocalLinkWithHash) {
      return (
        <ScrollLink
          to={to.substring(1)}
          smooth
          offset={-180}
          duration={500}
          className={className}
          activeClass={activeClassName}
          onClick={onClick}
        >
          {children}
        </ScrollLink>
      );
    }

    if (isSubpageLocalLinkWithHash) {
      return (
        <a
          href={to.charAt(0) === '#' ? `/${to}` : to}
          className={className}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    // e.q. example.com/services
    // but also example.com/services/1 will be highlighted
    if (partiallyActive) {
      return (
        <Link
          to={createLocalLink(to, wordpressUrl)}
          partiallyActive={partiallyActive}
          className={className}
          activeClassName={activeClassName}
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
        className={className}
        activeClassName={activeClassName}
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
