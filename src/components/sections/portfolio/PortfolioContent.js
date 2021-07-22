import React from 'react';
import LMPagination from '../../common/LMPagination';
import PortfolioGallery from './PortfolioGallery';
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
    // Check if we have items.
    if (!hasItems) return null;

    // Check if we need to show all items.
    if (showAll) {
      return items;
    }

    // Filter items based on the category.
    return items.filter(({ categories }) =>
      categories.nodes.some(({ slug }) => slug === selectedCategory),
    );
  };

  return (
    hasItems && (
      <LMPagination
        perPage={perPage}
        items={getFilteredItems(items)}
        paginationClassName="portfolio-content__meta"
        buttonText={buttonText}
      >
        {(paginatedProjects, currentPage) => (
          <div className="portfolio-content">
            <PortfolioGallery
              items={paginatedProjects}
              selectedCategory={selectedCategory}
              currentPage={currentPage}
            />
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
