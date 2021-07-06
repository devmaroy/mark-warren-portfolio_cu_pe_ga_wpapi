/* eslint-disable no-alert */
import React, { useState } from 'react';
import BlogSidebarHeader from './BlogSidebarHeader';
import Form from '../../../common/form/Form';
import FormField from '../../../common/form/FormField';
import blogSidebarNewsletterType from '../../../../types/components/pages/blog/sidebar/blogSidebarNewsletterType';

const BlogSidebarNewsletter = ({ heading, form }) => {
  const [email, setEmail] = useState('');

  const handleChange = (name, value) => {
    setEmail(value);
  };

  return (
    <div className="blog-sidebar__panel blog-sidebar-newsletter">
      <BlogSidebarHeader heading={heading} />
      <Form
        name="search"
        className="form--2cols"
        buttonDisabled={false}
        buttonText="Send"
        buttonClassName="button--primary"
        buttonDisableShadow
        buttonSize="lg"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Submitted! Yay!');
        }}
      >
        <FormField
          type="email"
          id="keywords"
          name="email"
          placeholder={form.placeholder}
          value={email}
          className="form-field__control--outline"
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

BlogSidebarNewsletter.propTypes = {
  ...blogSidebarNewsletterType,
};

export default BlogSidebarNewsletter;
