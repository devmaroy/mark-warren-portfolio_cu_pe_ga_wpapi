import React from 'react';
import DynamicLink from '../../common/DynamicLink';

const FooterMenu = ({ menu }) => (
  <ul className="footer-menu">
    {menu.map(({ id, url, text }) => (
      <li key={id} className="footer-menu__item">
        <DynamicLink to={url} className="footer-menu__link">
          {text}
        </DynamicLink>
      </li>
    ))}
  </ul>
);

export default FooterMenu;
