import React from 'react';
import SocialIcon from './SocialIcon';
import socialType from '../../../types/components/common/social/socialType';

const Social = ({ items, fixedWidth }) => (
  <ul className="social">
    {items &&
      items.length !== 0 &&
      items.map(({ url, name, type }) => (
        <li key={url} className="social__item">
          <a href={url} className="social__link">
            <SocialIcon icon={name} type={type} fixedWidth={fixedWidth} />
          </a>
        </li>
      ))}
  </ul>
);

Social.propTypes = {
  ...socialType,
};

export default Social;
