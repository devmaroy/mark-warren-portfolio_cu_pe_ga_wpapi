import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HeroInfo from './HeroInfo';
import HeroImage from './HeroImage';

// API Query
const APIQuery = graphql`
  query SectionHeroQuery {
    wpgraphql {
      sectionHero(id: "cG9zdDozNA==") {
        acf {
          title
          tagline
          text
          cta {
            text
            url
            variant
          }
          images {
            lg {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  gatsbyImageData(width: 1200, quality: 100)
                }
              }
            }
            xl {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  gatsbyImageData(width: 1200, quality: 100)
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionHeroData = data.wpgraphql.sectionHero.acf;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <HeroInfo
            title={APISectionHeroData.title}
            tagline={APISectionHeroData.tagline}
            text={APISectionHeroData.text}
            cta={APISectionHeroData.cta}
          />
          <HeroImage
            lg={APISectionHeroData.images.lg}
            xl={APISectionHeroData.images.xl}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
