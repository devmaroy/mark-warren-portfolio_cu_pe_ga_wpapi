import React from 'react';
import classNames from 'classnames';
import portfolioMenuType from '../../../types/components/sections/portfolio/portfolioMenuType';

const PortfolioMenu = ({
  categories,
  defaultCategory,
  activeCategory,
  setActiveCategory,
}) => {
  const nonEmptyCategories = categories.filter(
    ({ count }) => count && count !== 0,
  );

  return (
    <ul className="portfolio-menu">
      <li className="portfolio-menu__item">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={classNames('portfolio-menu__link', {
            'portfolio-menu__link--active': activeCategory === 'all',
          })}
        >
          {defaultCategory}
        </button>
      </li>

      {nonEmptyCategories.map(({ id, name, slug }) => (
        <li key={id} className="portfolio-menu__item">
          <button
            type="button"
            onClick={() => setActiveCategory(slug)}
            className={classNames('portfolio-menu__link', {
              'portfolio-menu__link--active': activeCategory === slug,
            })}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

PortfolioMenu.propTypes = {
  ...portfolioMenuType,
};

export default PortfolioMenu;
