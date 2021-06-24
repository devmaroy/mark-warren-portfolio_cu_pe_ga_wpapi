/* eslint-disable react/no-danger */
import React from 'react';
import aboutInfoType from '../../../types/components/sections/about/aboutInfoType';

const AboutInfo = ({ text, technologies }) => (
  <div className="about-info">
    <div
      className="about-info__text text-basic"
      dangerouslySetInnerHTML={{ __html: text }}
    />
    {technologies && (
      <div className="about-info-technologies">
        <h4
          className="about-info-technologies__heading"
          dangerouslySetInnerHTML={{ __html: technologies.heading }}
        />

        {technologies.list.length !== 0 && (
          <ul className="about-info-technologies-list">
            {technologies.list.map(({ name }) => (
              <li key={name} className="about-info-technologies-list__item">
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    )}
  </div>
);

AboutInfo.propTypes = {
  ...aboutInfoType,
};

export default AboutInfo;
