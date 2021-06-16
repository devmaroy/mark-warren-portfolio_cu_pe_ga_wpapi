import React, { useState } from 'react';
import BlogSidebarHeader from './BlogSidebarHeader';
import Form from '../../../common/form/Form';
import FormField from '../../../common/form/FormField';

const BlogSidebarNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleChange = (name, value) => {
    setEmail(value);
  };

  return (
    <div className="blog-sidebar__panel blog-sidebar-newsletter">
      <BlogSidebarHeader heading="Newsletter" />

      <Form
        name="search"
        className="form--2cols"
        buttonDisabled={false}
        buttonText="Send"
        buttonClassName="button--primary"
        buttonDisableShadow
        buttonSize="lg"
        onSubmit={() => console.log('submitted')}
      >
        <FormField
          type="email"
          id="keywords"
          name="email"
          placeholder="Email Address"
          value={email}
          className="form-field__control--outline"
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default BlogSidebarNewsletter;
