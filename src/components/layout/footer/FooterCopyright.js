import React from 'react';
import Logo from '../../common/Logo';
import footerCopyrightType from '../../../types/components/layout/footer/footerCopyrightType';

const FooterCopyright = ({ logo, copyrightText, copyrightRights }) => (
  <div className="footer-copyright">
    <div className="footer-copyright__logo">
      <Logo logo={logo} size="sm" />
    </div>

    <div className="footer-copyright__text">
      {copyrightText} {new Date().getFullYear()} {copyrightRights}
    </div>
  </div>
);

FooterCopyright.propTypes = {
  ...footerCopyrightType,
};

export default FooterCopyright;
