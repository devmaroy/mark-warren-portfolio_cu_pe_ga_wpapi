/* eslint-disable react/no-danger */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import cardType from '../../types/components/common/cardType';

const Card = ({ number, icon, iconSize = 'md', heading, text, author }) => (
  <div className="card">
    <div className="card__header">
      {number && (
        <span className="card__number">
          {number.toString().padStart(2, '0')}
        </span>
      )}

      <img
        src={icon}
        alt={heading ? `Card icon for ${heading}` : 'Card icon'}
        className={`card__icon card__icon--${iconSize}`}
      />
    </div>

    <div className="card__body">
      {heading && (
        <h3
          className="card__heading"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      )}

      {text && (
        <div
          className="card__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>

    {author && (
      <div className="card-author">
        <div className="card-author__image">
          <GatsbyImage
            image={author.image.childImageSharp.gatsbyImageData}
            alt={author.name}
          />
        </div>

        <div className="card-author__info">
          <h5
            className="card-author__name"
            dangerouslySetInnerHTML={{ __html: author.name }}
          />

          <span
            className="card-author__position"
            dangerouslySetInnerHTML={{ __html: author.position }}
          />
        </div>
      </div>
    )}
  </div>
);

Card.propTypes = {
  ...cardType,
};

export default Card;
