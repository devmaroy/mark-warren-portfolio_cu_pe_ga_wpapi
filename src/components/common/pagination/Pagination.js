import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import paginationAlgorithm from './algorithm';
import paginationType from '../../../types/components/common/pagination/paginationType';

const Pagination = ({
  totalPages,
  prefix = 'blog',
  containerClassName = 'gsp',
  listClassName = 'gsp-list',
  listItemClassName = 'gsp-list__item',
  listLinkClassName = 'gsp-list__link',
  listLinkActiveClassName = 'gsp-list__link--active',
}) => {
  const initialPage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return parseInt(window.localStorage.getItem('gspCurrentPage'), 10) || 1;
    }

    return 0;
  };

  const [currentPage, setCurrentPagePage] = useState(initialPage);

  useEffect(() => {
    localStorage.setItem('gspCurrentPage', currentPage);

    return () => {
      localStorage.removeItem('gspCurrentPage');
    };
  }, [currentPage]);

  const changeCurrentPage = (page) => {
    setCurrentPagePage(page);
  };

  const hasItemsToPaginate = () =>
    totalPages && paginationAlgorithm(currentPage, totalPages).length > 1;

  const getPagination = () => paginationAlgorithm(currentPage, totalPages);

  if (!totalPages) {
    return <p>Please provide items to paginate.</p>;
  }

  return (
    <div className={containerClassName}>
      <ul className={listClassName}>
        {hasItemsToPaginate() &&
          getPagination().map((page) => (
            <li key={page} className={listItemClassName}>
              {page === '...' ? (
                page
              ) : (
                <Link
                  to={page === 1 ? `/${prefix}` : `/${prefix}/${page}`}
                  className={listLinkClassName}
                  activeClassName={listLinkActiveClassName}
                  onClick={() => changeCurrentPage(page)}
                >
                  {page}
                </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = { ...paginationType };

export default Pagination;
