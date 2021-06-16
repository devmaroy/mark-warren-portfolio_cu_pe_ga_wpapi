import React, { useState } from 'react';
import BlogSidebarHeader from './BlogSidebarHeader';
import Form from '../../../common/form/Form';
import FormField from '../../../common/form/FormField';
import searchIcon from '../../../../images/icons/search.svg';

const BlogSidebarSearch = () => {
  const [keywords, setKeywords] = useState('');

  const handleChange = (name, value) => {
    setKeywords(value);
  };

  return (
    <div className="blog-sidebar__panel blog-sidebar-search">
      <BlogSidebarHeader heading="Search" />

      <Form
        name="search"
        className="form--2cols"
        buttonDisabled={false}
        showButtonIcon
        buttonIcon={searchIcon}
        buttonClassName="button--primary"
        buttonDisableShadow
        onSubmit={() => console.log('submitted')}
      >
        <FormField
          type="search"
          id="keywords"
          name="keywords"
          placeholder="Search ..."
          value={keywords}
          className="form-field__control--outline"
          onChange={handleChange}
          // error={newsletterFields.error}
        />
      </Form>
    </div>
  );
};

export default BlogSidebarSearch;
