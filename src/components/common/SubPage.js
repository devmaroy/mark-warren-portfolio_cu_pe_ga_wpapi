import React from 'react';
import SEO from 'gatsby-plugin-wpgraphql-seo';
import Layout from '../layout/Layout';
import subPageType from '../../types/components/common/subPageType';

const SubPage = ({
  seo = undefined,
  className = '',
  classNameInner = '',
  children,
}) => (
  <Layout>
    {seo && <SEO post={seo} />}

    <div className={`subpage ${className}`}>
      <div className="container">
        <div className={`subpage__inner ${classNameInner}`}>
          {children && children}
        </div>
      </div>
    </div>
  </Layout>
);

SubPage.propTypes = {
  ...subPageType,
};

export default SubPage;
