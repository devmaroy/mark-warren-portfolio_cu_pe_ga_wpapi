import React from 'react';
import SectionHeader from '../../common/SectionHeader';
import Card from '../../common/Card';
import devicesIcon from '../../../images/icons/devices.svg';
import designIcon from '../../../images/icons/design.svg';
import codingIcon from '../../../images/icons/coding.svg';

const Services = () => {
  const cards = [
    {
      id: 'b1c32ecd-c230-4a63-8779-ae14cf795ec2',
      icon: devicesIcon,
      heading: 'UI/UX Design',
      text: `<p>Wafer cotton wafer muffin rolls gingerbread. Sweet lemon oat 
      cake candy jelly beans.</p>`,
    },
    {
      id: '22e647b4-a594-4672-a9dc-497ae8b6f24e',
      icon: designIcon,
      heading: 'Web Design',
      text: `<p>Pastry fruitcake candy cotton candy pastry soufflé cupcake 
      macaroon sweet roll.</p>`,
    },
    {
      id: '10db3ff5-743f-4aee-ae72-b40234d38316',
      icon: codingIcon,
      heading: 'Web Development',
      text: `<p>Bear claw marzipan wafer apple pie tootsie roll. Jelly-o 
      chocolate bar cookie cake bonbon.</p>`,
    },
  ];

  return (
    <section className="section services">
      <div className="container">
        <div className="section__inner services__inner">
          <SectionHeader heading="What I Do" subHeading="Services" />

          <div className="section__content">
            <div className="card__responsive-layout services__cards">
              {cards.map(({ id, icon, heading, text }, i) => (
                <Card
                  key={id}
                  number={i + 1}
                  icon={icon}
                  heading={heading}
                  text={text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
