import React from 'react';
import Layout from '../layout/Layout';
import subPageType from '../../types/components/common/subPageType';

const SubPage = ({ className = '', classNameInner = '', children }) => (
  <Layout>
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
