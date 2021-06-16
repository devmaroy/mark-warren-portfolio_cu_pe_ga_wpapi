import React from 'react';
import Social from '../../common/social/Social';
import footerSocialType from '../../../types/components/layout/footer/footerSocialType';

const FooterSocial = ({ social }) => (
  <div className="footer-social">
    <Social items={social} />
  </div>
);

FooterSocial.propTypes = {
  ...footerSocialType,
};

export default FooterSocial;
