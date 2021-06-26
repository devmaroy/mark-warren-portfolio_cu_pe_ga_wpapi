import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FooterCopyright from './FooterCopyright';
import FooterAuthor from './FooterAuthor';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';

// API Query
const APIQuery = graphql`
  query APIFooterQuery {
    wpgraphql {
      themeFooterSettings {
        themeFooterSettings {
          copyright {
            logo {
              altText
              sourceUrl
            }
            copyrightRights
            copyrightText
          }
          author {
            text
          }
          menu {
            text
            url
          }
          social {
            type
            name
            url
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(APIQuery);
  const APIFooterData = data.wpgraphql.themeFooterSettings.themeFooterSettings;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__group">
            <FooterCopyright
              logo={APIFooterData.copyright.logo}
              copyrightText={APIFooterData.copyright.copyrightText}
              copyrightRights={APIFooterData.copyright.copyrightRights}
            />
            <FooterAuthor text={APIFooterData.author.text} />
          </div>

          <div className="footer__group">
            <FooterMenu menu={APIFooterData.menu} />
            <FooterSocial social={APIFooterData.social} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
