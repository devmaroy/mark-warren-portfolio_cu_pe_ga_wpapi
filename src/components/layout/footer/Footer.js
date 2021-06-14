import React from 'react';
import FooterCopyright from './FooterCopyright';
import FooterAuthor from './FooterAuthor';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';
import logoImg from '../../../images/logo/logo.svg';

const Footer = () => {
  const footerCopyrightData = {
    logo: { sourceUrl: logoImg, altText: 'Mark Warren' },
    textCopyright: 'Copyright',
    textRights: '© All rights reserved.',
  };

  const footerAuthorData = {
    text: `<p>Created with <strong>love</strong> by <a href="https://marekmatejovic.com/">devmaroy</a></p>`,
  };

  const footerMenu = [
    {
      id: '9ba0966c-eefa-475b-872d-fbd30da04efd',
      url: '/privacy-policy',
      text: 'Privacy Policy',
    },
    {
      id: '58e1301b-daee-4978-9f0f-b54e60ee17d4',
      url: '/terms-of-service',
      text: 'Terms of Service',
    },
  ];

  const footerSocial = [
    {
      id: '3c875173-a80b-4b3f-ad6b-7788b5a61734',
      url: 'https://facebook.com/',
      name: 'facebook',
    },
    {
      id: 'd8cb31af-7fed-425d-8f03-2a54b7bff0ed',
      url: 'https://twitter.com/',
      name: 'twitter',
    },
    {
      id: '96798ca6-9560-4ff9-be3c-4c2f01c94490',
      url: 'https://instagram.com/',
      name: 'instagram',
    },
    {
      id: '631187ff-23fd-4d4d-a3e3-fa03921a7575',
      url: 'https://linkedin.com/',
      name: 'linkedin',
    },
    {
      id: 'b3d304b3-cfd8-43ed-a117-a3a4ff5b8539',
      url: 'https://youtube.com/',
      name: 'youtube',
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <FooterCopyright
            logo={footerCopyrightData.logo}
            textCopyright={footerCopyrightData.textCopyright}
            textRights={footerCopyrightData.textRights}
          />
          <FooterAuthor text={footerAuthorData.text} />
          <FooterMenu menu={footerMenu} />
          <FooterSocial social={footerSocial} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
