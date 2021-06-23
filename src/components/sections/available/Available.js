import React from 'react';
import Button from '../../common/Button';
import InfoBanner from '../../common/InfoBanner';

const Available = () => {
  const availableData = {
    heading: 'I’m available for freelance job',
    text: `<p>Lemon drops apple pie marshmallow caramels carrot cake cookie 
    cotton candy. Marshmallow sugar plum chocolate.</p>`,
    buttonText: 'Hire Me',
  };

  return (
    <section id="available" className="section available">
      <div className="container">
        <div className="section__inner available__inner">
          <InfoBanner heading={availableData.heading} text={availableData.text}>
            <Button
              size="lg"
              variant="secondary"
              to="#portfolio"
              showIcon={false}
            >
              {availableData.buttonText}
            </Button>
          </InfoBanner>
        </div>
      </div>
    </section>
  );
};

export default Available;
