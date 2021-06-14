import React from 'react';
import Social from '../../common/social/Social';

const FooterSocial = ({ social }) => (
  <div className="footer-social">
    <Social items={social} />
  </div>
);

export default FooterSocial;
