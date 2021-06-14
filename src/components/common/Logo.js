import React from 'react';
import { Link } from 'gatsby';
import logoType from '../../types/components/common/logoType';

const Logo = ({ logo, size = 'md' }) => (
  <div className="logo">
    <Link to="/" className="logo__link">
      <div className="logo__inner">
        <img
          src={logo.sourceUrl}
          alt={logo.altText}
          className={`logo__image logo__image--${size}`}
        />
      </div>
    </Link>
  </div>
);

Logo.propTypes = {
  ...logoType,
};

export default Logo;
