/* eslint-disable react/no-danger */
import React from 'react';
// import SEO from 'gatsby-plugin-wpgraphql-seo';
// import Social from './Social';
// import errorPageType from '../../types/components/common/errorPageType';

const ErrorPage = ({
  seo = undefined,
  type = 'error',
  heading = 'Error',
  subHeading,
  children,
}) => (
  <>
    {/* {seo && <SEO post={seo} />} */}

    <section className={`error-page error-page--${type}`}>
      <div className="container">
        <div className="error-page__inner">
          <h1 className={`error-page__heading error-page__heading--${type}`}>
            {heading}
          </h1>

          {subHeading && (
            <div
              className="error-page__sub-heading"
              dangerouslySetInnerHTML={{ __html: subHeading }}
            />
          )}

          {children && (
            <div
              className="error-page__text"
              dangerouslySetInnerHTML={{ __html: children }}
            />
          )}

          {/* <div className="error-page__social">
            <Social />
          </div> */}
        </div>
      </div>
    </section>
  </>
);

// ErrorPage.propTypes = {
//   ...errorPageType,
// };

export default ErrorPage;
