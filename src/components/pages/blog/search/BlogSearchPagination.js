import React from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import classNames from 'classnames';
import ConditionalWrap from '../../../common/ConditionalWrap';
import blogSearchPaginationType from '../../../../types/components/pages/blog/search/blogSearchPaginationType';

const BlogSearchPagination = ({
  wrapper = undefined,
  currentRefinement,
  nbPages,
  refine,
  createURL,
}) =>
  nbPages > 1 && (
    <ConditionalWrap condition={wrapper} wrap={(children) => wrapper(children)}>
      <ul className="pagination">
        {Array.from({ length: nbPages }).map((_, i) => {
          const page = i + 1;

          return (
            <li key={page} className="pagination__item">
              <a
                href={createURL(page)}
                className={classNames('pagination__link', {
                  'pagination__link--active': currentRefinement === page,
                })}
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </ConditionalWrap>
  );

BlogSearchPagination.propTypes = {
  ...blogSearchPaginationType,
};

export default connectPagination(BlogSearchPagination);
