/* eslint-disable react/no-danger */
import React from 'react';

const FooterAuthor = ({ text }) => (
  <div className="footer-author">
    <div
      className="footer-author__text"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);

export default FooterAuthor;
