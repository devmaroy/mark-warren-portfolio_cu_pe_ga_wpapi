import React from 'react';
import Button from '../../common/Button';

const HeroInfo = () => (
  <div className="hero-info">
    <h1 className="hero-info__heading">Mark Warren</h1>
    <h3 className="hero-info__subheading">
      I’m front-end developer <span>& designer</span>
    </h3>

    <div className="hero-info__text">
      <p>
        Gingerbread carrot cake marshmallow. Jelly-o pie sweet marzipan bear
        claw sweet roll wafer. Sweet roll cheesecake oat cake wafer jelly chupa
        chups.
      </p>
    </div>

    <div className="hero-info-cta">
      <div className="hero-info-cta__first">
        <Button to="https://myfile.com/" showIcon={false}>
          Download CV
        </Button>
      </div>

      <div className="hero-info-cta__second">
        <Button variant="outline-primary" to="#portfolio" showIcon={false}>
          See projects
        </Button>
      </div>
    </div>
  </div>
);

export default HeroInfo;
