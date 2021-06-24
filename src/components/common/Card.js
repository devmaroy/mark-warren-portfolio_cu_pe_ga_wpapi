/* eslint-disable react/no-danger */
import React from 'react';
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
        src={icon.sourceUrl}
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
          <img src={author.image.sourceUrl} alt={author.image.altText} />
        </div>

        <div className="card-author__info">
          <h5
            className="card-author__name"
            dangerouslySetInnerHTML={{ __html: author.name }}
          />

          <span
            className="card-author__career"
            dangerouslySetInnerHTML={{ __html: author.position }}
          />

          {author.company && (
            <>
              {' '}
              <span
                className="card-author__career card-author__career--highlight"
                dangerouslySetInnerHTML={{ __html: author.company }}
              />
            </>
          )}
        </div>
      </div>
    )}
  </div>
);

Card.propTypes = {
  ...cardType,
};

export default Card;
