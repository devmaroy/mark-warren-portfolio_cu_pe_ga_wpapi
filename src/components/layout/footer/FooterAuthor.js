/* eslint-disable react/no-danger */
import React from 'react';
import footerAuthorType from '../../../types/components/layout/footer/footerAuthorType';

const FooterAuthor = ({ text }) => (
  <div className="footer-author">
    <div
      className="footer-author__text"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);

FooterAuthor.propTypes = {
  ...footerAuthorType,
};

export default FooterAuthor;
