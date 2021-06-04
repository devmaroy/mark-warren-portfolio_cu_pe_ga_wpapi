import React from 'react';
import DynamicLink from '../../common/DynamicLink';
import navigationItemsType from '../../../types/components/layout/navigation/navigationItemsType';

const NavigationItems = ({ items, toggleNavigation }) => (
  <ul className="navigation-list">
    {items.map(({ id, label, path, cssClasses, acf }) => (
      <li key={id} className={`navigation-list__item ${cssClasses.join(' ')}`}>
        <DynamicLink
          to={path}
          partiallyActive={acf.menuItemPartiallyActive}
          onClick={toggleNavigation}
          className={`navigation-list__link ${cssClasses.join(' ')}`}
          activeClassName="navigation-list__link--active"
        >
          {label}
        </DynamicLink>
      </li>
    ))}
  </ul>
);

NavigationItems.propTypes = {
  ...navigationItemsType,
};

export default NavigationItems;
