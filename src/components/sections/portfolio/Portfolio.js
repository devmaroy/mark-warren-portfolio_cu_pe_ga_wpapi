import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import SectionHeader from '../../common/SectionHeader';
import Button from '../../common/Button';

// API Query
const APIQuery = graphql`
  query SectionPortfolioQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sections/portfolio" }
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

const Portfolio = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionPortfolioData = data.allFile.nodes;

  const portfolioMenu = [
    { id: 'f6913a05-a472-4a05-9f3b-efa6f12b02f4', name: 'All', active: true },
    {
      id: '74759627-9466-4ee0-b577-906b00e9e443',
      name: 'Web Development',
      active: false,
    },
    {
      id: 'ee77af33-ca7c-40c0-b9ea-d0dc7ab8edf6',
      name: 'Web Design',
      active: false,
    },
    {
      id: 'eecbf44b-d905-4c4e-8117-aca810e020a2',
      name: 'UI/UX Design',
      active: false,
    },
  ];

  return (
    <section className="section portfolio">
      <div className="container">
        <div className="section__inner portfolio__inner">
          <SectionHeader heading="My Latest Projects" subHeading="Portfolio" />

          <ul className="portfolio-menu">
            {portfolioMenu.map(({ id, name, active }) => (
              <li key={id} className="portfolio-menu__item">
                <a
                  href="/"
                  className={classNames('portfolio-menu__link', {
                    'portfolio-menu__link--active': active,
                  })}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="section__content">
            <div className="portfolio-gallery">
              {APISectionPortfolioData.map(({ id, childImageSharp }) => (
                <div key={id} className="portfolio-gallery__item">
                  <GatsbyImage
                    image={childImageSharp.gatsbyImageData}
                    alt="Portfolio image"
                  />
                </div>
              ))}
            </div>

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
