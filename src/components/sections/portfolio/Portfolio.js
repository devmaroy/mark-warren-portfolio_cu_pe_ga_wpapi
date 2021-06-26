import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SectionHeader from '../../common/SectionHeader';
import Button from '../../common/Button';

// API Query
const APIQuery = graphql`
  query SectionPortfolioQuery {
    wpgraphql {
      themeHeadingsSettings {
        themeHeadingsSettings {
          sections {
            portfolio {
              heading
              subHeading
            }
          }
        }
      }
      sectionPortfolios {
        nodes {
          id
          acf {
            image {
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
      sectionPortfoliosCategories {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  }
`;

const Portfolio = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionHeadingsData =
    data.wpgraphql.themeHeadingsSettings.themeHeadingsSettings.sections
      .portfolio;
  const APISectionPortfolioData = data.wpgraphql.sectionPortfolios.nodes;
  const APISectionPortfolioCategoriesData =
    data.wpgraphql.sectionPortfoliosCategories.nodes;

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section__inner portfolio__inner">
          <SectionHeader
            heading={APISectionHeadingsData.heading}
            subHeading={APISectionHeadingsData.subHeading}
          />

          <ul className="portfolio-menu">
            {APISectionPortfolioCategoriesData.map(({ id, name }) => (
              <li key={id} className="portfolio-menu__item">
                <a href="/" className="portfolio-menu__link">
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="section__content">
            {APISectionPortfolioData && APISectionPortfolioData.length !== 0 && (
              <div className="portfolio-gallery">
                {APISectionPortfolioData.map(({ id, acf }) => (
                  <div key={id} className="portfolio-gallery__item">
                    <GatsbyImage
                      image={
                        acf.image.imageFile.childImageSharp.gatsbyImageData
                      }
                      alt={acf.image.altText}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="portfolio-gallery__meta">
              <Button variant="primary" to="#" showIcon={false}>
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
