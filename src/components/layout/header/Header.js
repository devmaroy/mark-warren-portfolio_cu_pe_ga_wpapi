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
      id: 'd00e536d-e120-4a24-8f56-a627332427ff',
      path: '/',
      label: 'Home',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: 'a1b80555-efe4-4592-979f-54449afd216c',
      path: '#about',
      label: 'About',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '41d300fc-cb3c-4fd7-8821-457f5a40ee20',
      path: '#services',
      label: 'Services',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '6c5c0e08-02c8-44c2-b45c-5bfdd97ef2bf',
      path: '#portfolio',
      label: 'Portfolio',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: '0f52f4b0-fa93-401d-b7db-1d4dcd352ca4',
      path: '#reviews',
      label: 'Reviews',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: 'cbc73e38-3c19-4ef7-94da-18fdfb7ed709',
      path: '#contact',
      label: 'Contact',
      cssClasses: [],
      acf: {
        menuItemPartiallyActive: false,
      },
    },
    {
      id: 'fe785b35-9d86-4697-a33a-faccaabbceda',
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
