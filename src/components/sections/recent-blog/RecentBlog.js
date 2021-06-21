import React from 'react';
import SectionHeader from '../../common/SectionHeader';
import BlogPostsRecent from '../../pages/blog/BlogPostsRecent';

const RecentBlog = () => (
  <section className="section recent-blog">
    <div className="container">
      <div className="section__inner recent-blog__inner">
        <SectionHeader heading="My Recent Articles" subHeading="Blog" />

        <div className="section__content">
          <div className="recent-blog__posts">
            <BlogPostsRecent />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RecentBlog;
