import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SubPage from '../../components/common/SubPage';
import BlogPost from '../../components/pages/blog/BlogPost';

// API Query
const APIQuery = graphql`
  query SubPageBlogPostQuery {
    post: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "blog/post/01" }
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
    recentPosts: allFile(
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

const PostPage = () => {
  const data = useStaticQuery(APIQuery);
  const APISubPageBlogPostData = data.post.nodes;
  const APISubPageBlogPostRecentData = data.recentPosts.nodes;

  const post = {
    id: '070fc551-ef20-4b26-ac4c-d70f4216e519',
    image: APISubPageBlogPostData[0],
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
    tags: [
      {
        id: '2b731a39-cc53-4ad7-b2e8-3b3457dd7e5c',
        name: 'Travel',
        slug: 'travel',
      },
      {
        id: '09627188-bd0c-4263-9206-6c7009612083',
        name: 'Opinion',
        slug: 'opinion',
      },
      {
        id: 'a71c5e1f-8966-41b5-b7e0-2a027609d560',
        name: 'Love',
        slug: 'love',
      },
    ],
    recentPosts: [
      {
        id: '070fc551-ef20-4b26-ac4c-d70f4216e519',
        image: APISubPageBlogPostRecentData[0],
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
        image: APISubPageBlogPostRecentData[1],
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
        image: APISubPageBlogPostRecentData[2],
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
    ],
    excerpt: `<p>Macaroon cupcake dessert caramels halvah croissant sugar 
  plum sweet roll. Cookie oat cake pastry jujubes. Chocolate cake tootsie 
  roll gummi bears biscuit biscuit soufflé jelly biscuit candies. Jelly 
  beans sweet liquorice cupcake …</p>`,
    text: `
      <p>Macaroon cupcake dessert caramels halvah croissant sugar plum 
      sweet roll. Cookie oat cake pastry jujubes. Chocolate cake tootsie roll 
      gumm bears biscuit biscuit soufflé jelly biscuit. Muffin chocolate bar 
      lemon drops. Cupcake cookie wafer cupcake carrot cupcake tootsie roll.</p>
      <h2>Brownie sugar plum cotton</h2>
      <p>Fruitcake gingerbread sugar plum lollipop jujubes cheesecake danish 
      brownie pie. Chocolate cake caramels liquorice sesame snaps chocolate 
      cake. Muffin apple pie chocolate bar cake sweet candy canes. Marzipan 
      liquorice sweet roll biscuit danish fruitcake biscuit. Topping soufflé 
      sugar croissant chocolate bar sesame snaps jelly-o. Marzipan powder 
      caramels donut.</p>
      <p>Oat cake wafer dessert. Dessert powder ice cream. Apple pie candy 
      canes candy. Toffee sugar plumes dragée oat cake ice cream chocolate. 
      Sweet roll dragée macaroon halvah gummies macaroon carrot cake dragée 
      dragée. Jujubes icing candy wafer.</p>
      <h3>Halvah cheesecake lemon</h3>
      <p>Icing liquorice powder gummies jelly-o topping. Pastry jelly candy 
      cheesecake. Cake cotton candy cake jelly-o chocolate cake jelly sesame 
      snaps. Tootsie roll powder topping cotton candy gummi bears.</p>
      <ul>
        <li>Toffee pie marshmallow topping astry bonbon</li>
        <li>Marshmallow ice cream tootsie macaroon pudding</li>
        <li>Donut wafer cotton candy cake bear claw cookie</li>
      </ul>
      <p>Brownie cake marzipan tart powder liquorice cheesecake liquorice 
      dessert. Cake halvah caramels chocolate chocolate. Donut liquorice 
      tiramisu topping. Bear claw jujubes marzipan wafer lemon drops jujubes 
      cake jelly icing powder.</p>
      <h4>Wafer tiramisu oat cake jelly beans tootsie</h4>
      <p>Pudding tiramisu icing chocolate bar gummies dragée lollipop croissant 
      toffee liquorice muffin gingerbread marzipan halvah chocolate cake pastry. 
      Apple pie soufflé chocolate bar candy canes pudding sugar pie. Wafer 
      soufflé halvah brownie candy canes tiramisu.</p>
      <p>Dessert cookie sweet roll cotton candy cake tootsie roll. Muffin pie 
      gummi bears jelly-o lemon drops ice cream lemon drops. Jujubes jelly 
        apple pie. Icing powder pie candy canes.</p>
      <figure>
        <img src=${APISubPageBlogPostData[1].childImageSharp.gatsbyImageData.images.fallback.src} alt="Danish danish jelly tiramisu liquorice">
        <figcaption>Danish danish jelly tiramisu liquorice</figcaption>
      </figure>
      <h5>Fruitcake tarts marshmallow lettuce pie</h5>
      <p>Lemon drops macaroon icing cupcake liquorice. Pastry topping carrot 
      cake powder pastry topping pie chocolate. Ice cream bonbon bonbon 
      marshmallow sweet sweet. Sugar plum danish cake apple pie chocolate.</p>
      <div class="quote">
        <blockquote>
          <p>Dessert tiramisu cake roll Sweet lemon drops jelly beans 
          chocolate. Sesame snaps chupa chups sweet roll chocolate cake.</p>
        </blockquote>
      </div>
      <p>Marzipan pastry pie halvah soufflé sesame snaps. Cupcake sweet sweet. 
      Bonbon gummies brownie sweet. Macaroon cake lollipop tootsie roll 
      chocolate cake. Halvah pie liquorice carrot cake gummies pastry 
      fruitcake powder gummi bears. Lollipop bonbon marzipan sweet roll.
      Topping wafer halvah. Donut cotton candy cake sesame snaps.</p>
      <h6>Pudding cookie soufflé lettuce roll sweet tarts</h6>
      <p>Cake donut pie gummies danish cake toffee. Pastry cupcake caramels. 
      Soufflé cotton candy lollipop candy canes. Pie gingerbread cake. 
      Chupa sugar plum powder caramels bonbon. Jelly marshmallow topping 
      croissant marshmallow cake cupcakes jujubes.</p>
      <img src=${APISubPageBlogPostData[2].childImageSharp.gatsbyImageData.images.fallback.src} alt="Post image" class="second alignleft">
      <p>Tootsie roll toffee toffee dessert sweet lollipop pies tiramisu cookie 
      icing. Macaroon macaroon sweet cheesecake bonbon donut carrot brownie.</p>
      <p>Sweet roll sweet roll marshmallow chocolate cake cake. Jelly beans 
      sweet roll cookie pastry tiramisu. Pie lettuce chocolate cake jelly 
      beans cotton. Lettuce cupcake pies brownies candies.</p>
      <p>Jelly-o sweet roll lemon drops pudding lollipop chupa chups liquorice. 
      Soufflé donut biscuit gummi bears cupcake lollipop. Tiramisu jelly-o 
      tiramisu wafer marzipan tart gingerbread sugar plum jelly jelly beans 
      toffee toffee tiramisu. Danish cookie lemon drops muffin cupcake candy 
      jelly-o.</p>
    `,
  };

  return (
    <SubPage className="post" classNameInner="post__inner">
      <BlogPost post={post} />
    </SubPage>
  );
};

export default PostPage;
