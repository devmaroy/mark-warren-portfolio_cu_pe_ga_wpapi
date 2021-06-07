import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/hero/Hero';
import About from '../components/sections/about/About';
import Services from '../components/sections/services/Services';
import Portfolio from '../components/sections/portfolio/Portfolio';

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <Portfolio />
  </Layout>
);

export default IndexPage;
