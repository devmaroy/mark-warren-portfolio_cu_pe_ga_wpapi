import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../common/SectionHeader';
import BlogPostTeaser from '../../shared/blog/BlogPostTeaser';

// API Query
const APIQuery = graphql`
  query SectionRecentBlogQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "blog/posts" }
      }
      sort: { fields: base, order: ASC }
    ) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(width: 1200, quality: 100)
        }
      }
    }
  }
`;

const RecentBlog = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionRecentBlogData = data.allFile.nodes;

  const recentBlogPosts = [
    {
      id: '070fc551-ef20-4b26-ac4c-d70f4216e519',
      image: APISectionRecentBlogData[0],
      title: 'Halvah tart halvah gummi bonbon cake fruitcake chocolate',
      slug: 'halvah-tart-halvah-gummi-bonbon-cake-fruitcake-chocolate',
      date: '2021-06-09T12:53:11.875Z',
      categories: [
        {
          id: '1027cd7f-bf1b-450f-a307-c37224c3befb',
          name: 'Web Development',
          slug: 'web-development',
        },
      ],
    },
    {
      id: 'e333cf68-a90b-425a-8cc7-db46442dbb90',
      image: APISectionRecentBlogData[1],
      title: 'Oat beans lemon drops fruitcake topping pie pudding apple',
      slug: 'oat-beans-lemon-drops-fruitcake-topping-pie-pudding-apple',
      date: '2021-06-09T12:43:58.936Z',
      categories: [
        {
          id: '5013bac5-c999-4c65-abe4-963015238e3f',
          name: 'UI Design',
          slug: 'ui-design',
        },
      ],
    },
    {
      id: '69b71c82-866d-41f9-93e9-525a245073aa',
      image: APISectionRecentBlogData[2],
      title: 'Marshmallow wafer chocolate macaroon sesame snaps bar',
      slug: 'marshmallow-wafer-chocolate-macaroon-sesame-snaps-bar',
      date: '2021-06-09T12:43:58.936Z',
      categories: [
        {
          id: '3f214a1d-3524-4551-bdad-906531685616',
          name: 'Review',
          slug: 'review',
        },
      ],
    },
  ];

  return (
    <section className="section recent-blog">
      <div className="container">
        <div className="section__inner recent-blog__inner">
          <SectionHeader heading="My Recent Articles" subHeading="Blog" />

          <div className="section__content">
            <div className="recent-blog__posts">
              {recentBlogPosts.map((post) => (
                <BlogPostTeaser key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
