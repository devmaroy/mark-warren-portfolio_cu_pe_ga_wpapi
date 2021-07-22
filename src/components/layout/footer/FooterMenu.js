import React from 'react';
import DynamicLink from '../../common/DynamicLink';
import footerMenuType from '../../../types/components/layout/footer/footerMenuType';

const FooterMenu = ({ menu }) => (
  <ul className="footer-menu">
    {menu.map(({ url, text }) => (
      <li key={url} className="footer-menu__item">
        <DynamicLink
          to={url}
          className="footer-menu__link"
          activeClassName="footer-menu__link--active"
        >
          {text}
        </DynamicLink>
      </li>
    ))}
  </ul>
);

FooterMenu.propTypes = {
  ...footerMenuType,
};

export default FooterMenu;
