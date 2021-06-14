import React from 'react';
import Logo from '../../common/Logo';

const FooterCopyright = ({ logo, textCopyright, textRights }) => (
  <div className="footer-copyright">
    <div className="footer-copyright__logo">
      <Logo logo={logo} size="sm" />
    </div>

    <div className="footer-copyright__text">
      {textCopyright} {new Date().getFullYear()} {textRights}
    </div>
  </div>
);

export default FooterCopyright;
