import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import layoutType from '../../types/components/layout/layoutType';

const Layout = ({ showPartials = true, children }) => (
  <div className="site-content">
    {showPartials && <Header />}

    <main className="main">{children}</main>

    {showPartials && <Footer />}
  </div>
);

Layout.propTypes = {
  ...layoutType,
};

export default Layout;
