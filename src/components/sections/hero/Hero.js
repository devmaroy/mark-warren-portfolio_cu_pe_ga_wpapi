import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HeroInfo from './HeroInfo';
import HeroImage from './HeroImage';

// API Query
const APIQuery = graphql`
  query SectionHeroQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sections/hero" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 1200, quality: 100)
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionHeroData = data.allFile.nodes;

  const heroImage = {
    lg: {
      imageFile: APISectionHeroData[0],
      altText: 'Hero image',
    },
    xl: {
      imageFile: APISectionHeroData[1],
      altText: 'Hero image',
    },
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__inner">
          <HeroInfo />
          <HeroImage image={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
