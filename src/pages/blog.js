import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SubPage from '../components/common/SubPage';
import SectionHeader from '../components/common/SectionHeader';
import BlogMain from '../components/pages/blog/BlogMain';
import BlogSidebar from '../components/pages/blog/BlogSidebar';

// API Query
const APIQuery = graphql`
  query SubPageBlogQuery {
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

const BlogPage = () => {
  const data = useStaticQuery(APIQuery);
  const APISubPageBlogData = data.allFile.nodes;

  const blogPosts = [
    {
      id: '070fc551-ef20-4b26-ac4c-d70f4216e519',
      image: APISubPageBlogData[0],
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
      excerpt: `<p>Macaroon cupcake dessert caramels halvah croissant sugar 
      plum sweet roll. Cookie oat cake pastry jujubes. Chocolate cake tootsie 
      roll gummi bears biscuit biscuit soufflé jelly biscuit candies. Jelly 
      beans sweet liquorice cupcake …</p>`,
    },
    {
      id: 'e333cf68-a90b-425a-8cc7-db46442dbb90',
      image: APISubPageBlogData[1],
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
      excerpt: `<p>Cake cake danish caramels cookie cookie ice cream dessert. 
      Bear claw cupcake lollipop dessert gingerbread. Dessert sweet roll 
      dessert jujubes. Jujubes chupa chups croissant dessert danish donut 
      topping chocolate bar ...</p>`,
    },
    {
      id: '69b71c82-866d-41f9-93e9-525a245073aa',
      image: APISubPageBlogData[2],
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
      excerpt: `<p>Tootsie roll liquorice chocolate bar ice cream. Biscuit 
      caramels cookie halvah cake sugar plum. Brownie macaroon muffin dragée 
      powder pie. Ice cream macaroon chocolate cake. Caramels sugar plum 
      chocolate sweet ...</p>`,
    },
  ];

  return (
    <SubPage className="blog" classNameInner="blog__inner">
      <SectionHeader heading="All my Articles" subHeading="Blog" />

      <BlogMain posts={blogPosts} />
      <BlogSidebar />
    </SubPage>
  );
};

export default BlogPage;
