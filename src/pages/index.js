import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/hero/Hero';
import About from '../components/sections/about/About';
import Services from '../components/sections/services/Services';
import Portfolio from '../components/sections/portfolio/Portfolio';
import Available from '../components/sections/available/Available';
import Reviews from '../components/sections/reviews/Reviews';
import Contact from '../components/sections/contact/Contact';

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Available />
    <Reviews />
    <Contact />
  </Layout>
);

export default IndexPage;
