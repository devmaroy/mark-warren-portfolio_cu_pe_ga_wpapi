import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../common/SectionHeader';
import BlogPostsRecent from '../../pages/blog/BlogPostsRecent';

// API Query
const APIQuery = graphql`
  query SectionRecentBlogQuery {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          sections {
            recentBlog {
              heading
              subHeading
            }
          }
        }
      }
    }
  }
`;

const RecentBlog = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.sections
      .recentBlog;

  return (
    <section id="recent-blog" className="section recent-blog">
      <div className="container">
        <div className="section__inner recent-blog__inner">
          <SectionHeader
            heading={APISectionHeadingsData.heading}
            subHeading={APISectionHeadingsData.subHeading}
          />

          <div className="section__content">
            <div className="recent-blog__posts">
              <BlogPostsRecent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
