import React, { useState, useEffect } from 'react';
import Logo from '../../common/Logo';
import Navigation from '../navigation/Navigation';
import logoImg from '../../../images/logo/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isToggleButtonVisible = () => {
    const toggleButton = document.querySelector('.navigation-toggle');
    const toggleButtonVisibility = getComputedStyle(toggleButton).display;

    return toggleButtonVisibility === 'block';
  };

  const toggleNavigation = () => {
    // Check if toggle button is visible.
    // Because we don't need to toggle navigation if we are on large devices.
    if (isToggleButtonVisible()) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    document.body.classList.toggle('is-open', isOpen);
    return () => {
      document.body.classList.remove('is-open');
    };
  }, [isOpen]);

  const items = [
    {
      id: '1',
      path: '/',
      label: 'Home',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '2',
      path: '#about',
      label: 'About',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '3',
      path: '#services',
      label: 'Services',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '4',
      path: '#portfolio',
      label: 'Portfolio',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '5',
      path: '#reviews',
      label: 'Reviews',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '6',
      path: '#contact',
      label: 'Contact',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '7',
      path: '/blog',
      label: 'Blog',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: true,
      },
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo logo={{ sourceUrl: logoImg, altText: 'Mark Warren' }} />
          <Navigation
            items={items}
            isOpen={isOpen}
            toggleNavigation={toggleNavigation}
            cta={{
              text: 'Hire Me',
              url: '#contact',
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
