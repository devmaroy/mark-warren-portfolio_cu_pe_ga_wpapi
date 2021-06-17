import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogSidebarRecentArticles from './sidebar/BlogSidebarRecentArticles';
import BlogSidebarSearch from './sidebar/BlogSidebarSearch';
import BlogSidebarCategories from './sidebar/BlogSidebarCategories';
import BlogSidebarTags from './sidebar/BlogSidebarTags';
import BlogSidebarNewsletter from './sidebar/BlogSidebarNewsletter';
import BlogSidebarInstagramFeed from './sidebar/BlogSidebarInstagramFeed';

// API Query
const APIQuery = graphql`
  query BlogSidebarRecentPostsQuery {
    posts: allFile(
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
    instagramFeed: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "instagram-feed/items" }
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

const BlogSidebar = () => {
  const data = useStaticQuery(APIQuery);
  const blogSidebarRecentPostsQuery = data.posts.nodes;
  const blogSidebarInstagramFeedQuery = data.instagramFeed.nodes;

  const blogSidebarRecentPosts = [
    {
      id: '070fc551-ef20-4b26-ac4c-d70f4216e519',
      image: blogSidebarRecentPostsQuery[0],
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
      image: blogSidebarRecentPostsQuery[1],
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
      image: blogSidebarRecentPostsQuery[2],
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

  const blogSidebarCategories = [
    {
      id: 'f01a5458-c681-423b-8a61-b3ef3cdafe7c',
      name: 'Web Development',
      slug: 'web-development',
      count: 12,
    },
    {
      id: '49075628-2d56-4383-9a33-ef0fd14a0236',
      name: 'UI Design',
      slug: 'ui-design',
      count: 9,
    },
    {
      id: 'a73e86a2-d540-4fab-a415-29c8650b9303',
      name: 'Review',
      slug: 'review',
      count: 6,
    },
  ];

  const blogSidebarTags = [
    {
      id: 'e9ead5b3-6a7a-45a5-8e19-f7ecdf3739fc',
      name: 'Project',
      slug: 'project',
      count: 14,
    },
    {
      id: '703541e6-204d-4c20-8770-04d1d27392e6',
      name: 'Design',
      slug: 'design',
      count: 13,
    },
    {
      id: '115d2d0a-cf64-4d1d-be6e-27498cee6b5d',
      name: 'Travel',
      slug: 'travel',
      count: 11,
    },
    {
      id: '8770bef8-fdaa-45f5-aaa3-e989de8d3774',
      name: 'Settings',
      slug: 'settings',
      count: 10,
    },
    {
      id: '19cb7261-48fe-4d86-909c-fbfc096686e6',
      name: 'Love',
      slug: 'love',
      count: 8,
    },
    {
      id: 'a4d7263c-9eab-4995-ab66-1081bf9ba31e',
      name: 'Opinion',
      slug: 'opinion',
      count: 6,
    },
    {
      id: '4364d81d-a439-40d6-9dd3-2d99249fa501',
      name: 'Technology',
      slug: 'technology',
      count: 4,
    },
  ];

  return (
    <div className="blog-sidebar">
      <BlogSidebarRecentArticles posts={blogSidebarRecentPosts} />
      <BlogSidebarSearch />
      <BlogSidebarCategories categories={blogSidebarCategories} />
      <BlogSidebarTags tags={blogSidebarTags} />
      <BlogSidebarNewsletter />
      <BlogSidebarInstagramFeed items={blogSidebarInstagramFeedQuery} />
    </div>
  );
};

export default BlogSidebar;
