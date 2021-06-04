import React from 'react';
import HeroInfo from './HeroInfo';
import HeroImage from './HeroImage';

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero__inner">
        <HeroInfo />
        <HeroImage />
      </div>
    </div>
  </section>
);

export default Hero;
