import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from 'gatsby-plugin-wpgraphql-seo';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/hero/Hero';
import About from '../components/sections/about/About';
import Services from '../components/sections/services/Services';
import Portfolio from '../components/sections/portfolio/Portfolio';
import Available from '../components/sections/available/Available';
import Reviews from '../components/sections/reviews/Reviews';
import Contact from '../components/sections/contact/Contact';
import RecentBlog from '../components/sections/recent-blog/RecentBlog';
import InstagramFeed from '../components/sections/instagram-feed/InstagramFeed';
import Newsletter from '../components/sections/newsletter/Newsletter';

// API Query
const APIQuery = graphql`
  query APIPageHomeQuery {
    wpgraphql {
      seoForPage(id: "cG9zdDozNjY=") {
        seo {
          title
          metaDesc
          focuskw
          metaKeywords
          metaRobotsNoindex
          metaRobotsNofollow
          opengraphTitle
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            srcSet
          }
          twitterTitle
          twitterDescription
          twitterImage {
            altText
            sourceUrl
            srcSet
          }
          canonical
          cornerstone
          schema {
            articleType
            pageType
            raw
          }
        }
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(APIQuery);
  const APIPageHomeSEOData = data.wpgraphql.seoForPage;

  return (
    <Layout>
      {APIPageHomeSEOData.seo && <SEO post={APIPageHomeSEOData} />}
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Available />
      <Reviews />
      <Contact />
      <RecentBlog />
      <InstagramFeed />
      <Newsletter />
    </Layout>
  );
};

export default IndexPage;
