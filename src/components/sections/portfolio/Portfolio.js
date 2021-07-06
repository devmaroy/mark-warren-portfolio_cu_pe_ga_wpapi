import React, { useState, useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GlobalContext } from '../../../context/GlobalContextProvider';
import SiteHeader from '../../common/SiteHeader';
import PortfolioMenu from './PortfolioMenu';
import PortfolioContent from './PortfolioContent';

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
          categories: sectionPortfoliosCategories {
            nodes {
              slug
            }
          }
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
      sectionPortfoliosCategories(where: { orderby: COUNT, order: DESC }) {
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

  const globalContextData = useContext(GlobalContext);
  const { categoriesListingWord, buttonText, perPage } =
    globalContextData.sections.portfolio;

  const [activeCategory, setActiveCategory] = useState(
    categoriesListingWord.toLowerCase(),
  );

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section__inner portfolio__inner">
          <SiteHeader
            heading={APISectionHeadingsData.heading}
            subHeading={APISectionHeadingsData.subHeading}
          />

          <PortfolioMenu
            categories={APISectionPortfolioCategoriesData}
            defaultCategory={categoriesListingWord}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="section__content">
            <PortfolioContent
              items={APISectionPortfolioData}
              selectedCategory={activeCategory}
              showAll={activeCategory === categoriesListingWord.toLowerCase()}
              buttonText={buttonText}
              perPage={perPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
