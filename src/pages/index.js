import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/hero/Hero';
import About from '../components/sections/about/About';
import Services from '../components/sections/services/Services';

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
  </Layout>
);

export default IndexPage;
