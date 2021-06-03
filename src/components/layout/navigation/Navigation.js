import React from 'react';
import classNames from 'classnames';
import Button from '../../common/Button';
import navigationType from '../../../types/components/layout/navigation/navigationType';
import NavigationItems from './NavigationItems';
import hamburgerMenuIcon from '../../../images/icons/hamburger-menu.svg';
import closeIcon from '../../../images/icons/close.svg';

const Navigation = ({ items, cta, isOpen, toggleNavigation }) => (
  <>
    <button
      type="button"
      className="navigation-toggle"
      onClick={toggleNavigation}
    >
      <img src={hamburgerMenuIcon} alt="Hamburger menu icon" />
    </button>

    <div className="navigation-wrapper">
      <div className={classNames('navigation-content', { 'is-open': isOpen })}>
        <nav className="navigation">
          <button
            type="button"
            className="navigation-toggle navigation-toggle--close"
            onClick={toggleNavigation}
          >
            <img src={closeIcon} alt="Close menu icon" />
          </button>
          <NavigationItems items={items} toggleNavigation={toggleNavigation} />
        </nav>

        <div className="navigation__cta">
          <Button
            to={cta.url}
            variant="outline-primary"
            size="lg"
            showIcon={false}
          >
            {cta.text}
          </Button>
        </div>
      </div>
    </div>
  </>
);

Navigation.propTypes = { ...navigationType };

export default Navigation;
