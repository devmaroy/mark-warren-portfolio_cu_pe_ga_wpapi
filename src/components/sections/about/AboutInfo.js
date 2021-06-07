/* eslint-disable react/no-danger */
import React from 'react';
import aboutInfoType from '../../../types/components/sections/about/aboutInfoType';

const AboutInfo = ({ text, technologies }) => (
  <div className="about-info">
    <div
      className="about-info__text text-basic"
      dangerouslySetInnerHTML={{ __html: text }}
    />

    <div className="about-info-technologies">
      <h4 className="about-info-technologies__heading">Technologies I use</h4>

      <ul className="about-info-technologies-list">
        {technologies.map(({ id, name }) => (
          <li key={id} className="about-info-technologies-list__item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

AboutInfo.propTypes = {
  ...aboutInfoType,
};

export default AboutInfo;
