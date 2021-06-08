import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../common/SectionHeader';
import Card from '../../common/Card';
import ratingIcon from '../../../images/icons/rating.svg';

// API Query
const APIQuery = graphql`
  query SectionReviewsQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sections/reviews" }
      }
      sort: { fields: base, order: ASC }
    ) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(width: 40, quality: 100)
        }
      }
    }
  }
`;

const Reviews = () => {
  const data = useStaticQuery(APIQuery);
  const APISectionReviewsData = data.allFile.nodes;

  const cards = [
    {
      id: '2fc71fb2-45ee-425b-9a3b-241c107b98e9',
      icon: ratingIcon,
      text: `<p>“Bonbon cheesecake powder cakes chocolate pudding chocolate 
      candy canes marzipan gummi bears jelly pie.“</p>`,
      author: {
        image: APISectionReviewsData[0],
        name: 'William Soule',
        position: `Manager at <strong>Tiramisu, Inc</strong>`,
      },
    },
    {
      id: '24bb1e97-6ac6-4889-b4e0-60d173cf48ab',
      icon: ratingIcon,
      text: `<p>“Chocolate chupa chups gummies pastry dessert. 
      Cake marshmallow chocolate bar toffee chocolate bar wafer chocolate 
      cake.”</p>`,
      author: {
        image: APISectionReviewsData[1],
        name: 'Daniella Jones',
        position: `Consultant at <strong>DJones, Inc</strong>`,
      },
    },
    {
      id: '790f5d92-cdcc-4c1a-8350-fea512f78ff3',
      icon: ratingIcon,
      text: `<p>“Lemon drops cake candy halvah candy canes. Dessert croissant 
      ice cream cake apple pie icing. Candy canes danish canes biscuit.“ </p>`,
      author: {
        image: APISectionReviewsData[2],
        name: 'Hope Reese',
        position: 'Freelance developer',
      },
    },
  ];

  return (
    <section className="section reviews">
      <div className="container">
        <div className="section__inner reviews__inner">
          <SectionHeader heading="What My Clients Say" subHeading="Reviews" />

          <div className="section__content">
            <div className="services__cards">
              {cards.map(({ id, icon, text, author }) => (
                <Card
                  key={id}
                  icon={icon}
                  iconSize="lg"
                  text={text}
                  author={author}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
