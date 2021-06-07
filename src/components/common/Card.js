/* eslint-disable react/no-danger */
import React from 'react';
import cardType from '../../types/components/common/cardType';

const Card = ({ number, icon, heading, text }) => (
  <div className="card">
    <div className="card__header">
      <span className="card__number">{number.toString().padStart(2, '0')}</span>
      <img src={icon} alt={`Card icon for ${heading}`} className="card__icon" />
    </div>

    <div className="card__body">
      <h3
        className="card__heading"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {text && (
        <div
          className="card__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  </div>
);

Card.propTypes = {
  ...cardType,
};

export default Card;
