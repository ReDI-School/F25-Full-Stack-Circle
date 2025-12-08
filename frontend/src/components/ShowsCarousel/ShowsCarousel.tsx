import React, { useRef, useEffect, useState } from 'react';
import styles from './ShowsCarousel.module.css';
import type { ShowsCarouselProps } from './ShowsCarousel.types';
import { MovieCards } from '../MovieCards';

export const ShowsCarousel: React.FC<ShowsCarouselProps> = ({ title, movieCard, className }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const spacing = 8;
  const [steps, setSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const calculateSteps = () => {
      const pageWidth = container.clientWidth * 0.8;
      const totalWidth = container.scrollWidth;
      const stepsCount = Math.ceil(totalWidth / pageWidth);
      setSteps(stepsCount);
    };

    calculateSteps();
    window.addEventListener('resize', calculateSteps);

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      // Infinite scroll logic
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        const first = container.firstElementChild as HTMLElement;
        if (first) {
          container.style.scrollBehavior = 'auto';
          container.appendChild(first);
          container.scrollLeft -= first.offsetWidth + spacing;
          container.style.scrollBehavior = 'smooth';
        }
      }

      if (scrollLeft <= 0) {
        const last = container.lastElementChild as HTMLElement;
        if (last) {
          container.style.scrollBehavior = 'auto';
          container.prepend(last);
          container.scrollLeft += last.offsetWidth + spacing;
          container.style.scrollBehavior = 'smooth';
        }
      }

      const pageWidth = container.clientWidth * 0.8;
      const step = Math.round(container.scrollLeft / pageWidth) % steps;
      setCurrentStep(step);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateSteps);
    };
  }, [steps]);

  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    const offset = direction === 'left' ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {title && <button className={styles.titleButton}>{title}</button>}

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.left}`}
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ❮
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          <MovieCards {...movieCard} />
        </div>
        <button
          className={`${styles.navButton} ${styles.right}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ❯
        </button>

        {/* Step indicators */}
        <div className={styles.carouselSteps}>
          {Array.from({ length: steps }).map((_, idx) => (
            <span
              key={idx}
              className={`${styles.carouselStep} ${idx === currentStep ? styles.activeStep : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
