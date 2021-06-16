import React from 'react';
import Logo from '../../common/Logo';
import footerCopyrightType from '../../../types/components/layout/footer/footerCopyrightType';

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

FooterCopyright.propTypes = {
  ...footerCopyrightType,
};

export default FooterCopyright;
