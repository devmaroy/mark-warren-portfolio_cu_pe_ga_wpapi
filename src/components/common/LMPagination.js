/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import Button from './Button';
import lmPaginationType from '../../types/components/common/lmPaginationType';

const LMPagination = ({
  perPage = 9,
  items,
  paginationClassName = '',
  buttonClassName = '',
  buttonVariant = 'primary',
  buttonText = 'Load more',
  onReset,
  children,
}) => {
  const [page, setPage] = useState(1);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  /**
   * Checks if we have items to paginate.
   * eq. If items length is 2 and per page is 3 then the result of the function
   * will be false. It can be used to show the load more button.
   *
   * @return {boolean}.
   */
  const hasItemsToPaginate = () => {
    return items.length > perPage;
  };

  /**
   * Creates chunk of the items based on the per page prop.
   *
   * @return {Array}.
   */
  const paginateItems = () => {
    return items.slice(0, page * perPage);
  };

  /**
   * Loads more items - the next chunk.
   *
   * @return {undefined}.
   */
  const loadMoreItems = () => {
    // Get total pages number
    const totalPages = Math.ceil(items.length / perPage);

    // Update state - move to another page basically
    setPage((currentPage) => currentPage + 1);
    setIsAllLoaded(totalPages === page + 1);
  };

  /**
   * Resets everything.
   *
   * @return {undefined}.
   */
  const reset = () => {
    setPage(1);
    setIsAllLoaded(false);
  };

  // Pass a cleanup/reset function to the onReset prop func.
  useEffect(() => {
    if (onReset) {
      onReset(reset);
    }
  }, [onReset]);

  return (
    <>
      {children(paginateItems())}

      <div className={`load-more-pagination ${paginationClassName}`}>
        {!isAllLoaded && hasItemsToPaginate() && (
          <Button
            type="button"
            variant={buttonVariant}
            to="#"
            showIcon={false}
            className={`load-more-pagination__button ${buttonClassName}`}
            onClick={loadMoreItems}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </>
  );
};

LMPagination.propTypes = {
  ...lmPaginationType,
};

export default LMPagination;
