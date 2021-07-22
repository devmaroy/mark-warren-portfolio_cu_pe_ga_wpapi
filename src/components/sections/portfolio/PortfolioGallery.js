import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { GatsbyImage } from 'gatsby-plugin-image';
import useMounted from '../../../hooks/useMounted';
import portfolioGalleryType from '../../../types/components/sections/portfolio/portfolioGalleryType';

const PortfolioGallery = ({ items, selectedCategory, currentPage }) => {
  const isMounted = useMounted();
  const alreadyAnimatedItemsRef = useRef([]);
  const porfolioItemsRef = useRef([]);
  porfolioItemsRef.current = [];
  const animation = useRef({
    y: -50,
    opacity: 0,
    stagger: 0.2,
  });

  const addToRefs = (el) => {
    if (el && !porfolioItemsRef.current.includes(el)) {
      porfolioItemsRef.current.push(el);
    }
  };

  const addIDsToAlreadyAnimated = (ids) => {
    alreadyAnimatedItemsRef.current = ids;
  };

  useEffect(() => {
    // Check if we already animated these items.
    const itemsToAnimate = porfolioItemsRef.current.filter(
      ({ id }) => !alreadyAnimatedItemsRef.current.includes(id),
    );

    addIDsToAlreadyAnimated(porfolioItemsRef.current.map(({ id }) => id));

    if (isMounted) {
      gsap.from(itemsToAnimate, animation.current);
    }

    return () => {
      gsap.globalTimeline.kill();
    };
  }, [currentPage]);

  useEffect(() => {
    if (isMounted) {
      gsap.from(porfolioItemsRef.current, animation.current);
    }

    return () => {
      gsap.globalTimeline.kill();
    };
  }, [selectedCategory]);

  return (
    <div className="portfolio-gallery">
      {items.map(({ id, acf }) => (
        <div
          key={id}
          ref={addToRefs}
          id={id}
          className="portfolio-gallery__item"
        >
          <GatsbyImage
            image={acf.image.imageFile.childImageSharp.gatsbyImageData}
            alt={acf.image.altText}
          />
        </div>
      ))}
    </div>
  );
};

PortfolioGallery.propTypes = {
  ...portfolioGalleryType,
};

export default PortfolioGallery;
