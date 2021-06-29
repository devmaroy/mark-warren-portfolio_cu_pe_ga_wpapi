import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import LMPagination from '../../common/LMPagination';
import portfolioContentType from '../../../types/components/sections/portfolio/portfolioContentType';

const PortfolioContent = ({
  items,
  selectedCategory,
  showAll = true,
  buttonText,
  perPage,
}) => {
  const hasItems = items && items.length !== 0;

  const getFilteredItems = () => {
    // Check if we should show all items.
    if (showAll) return items;

    // We have items and selected category.

    // Filter items based on the category and return them.
    return items.filter(({ categories }) =>
      categories.nodes.some(({ slug }) => slug === selectedCategory),
    );
  };

  return (
    hasItems && (
      <LMPagination
        perPage={perPage}
        items={getFilteredItems(items)}
        paginationClassName="portfolio-content-gallery__meta"
        buttonText={buttonText}
      >
        {(paginatedProjects) => (
          <div className="portfolio-content">
            <div className="portfolio-content-gallery">
              {paginatedProjects.map(({ id, acf }) => (
                <div key={id} className="portfolio-content-gallery__item">
                  <GatsbyImage
                    image={acf.image.imageFile.childImageSharp.gatsbyImageData}
                    alt={acf.image.altText}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </LMPagination>
    )
  );
};

PortfolioContent.propTypes = {
  ...portfolioContentType,
};

export default PortfolioContent;
