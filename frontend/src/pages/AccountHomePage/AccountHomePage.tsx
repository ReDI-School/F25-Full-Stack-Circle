import { Button, MaturityRating } from '../../components';
import Logo from '../../assets/icons/netflix-logo.svg?react';
import Replay from '../../assets/icons/replay-icon.svg?react';
import heroUrl from '../../assets/images/hero-2.jpg';

import styles from './AccountHomePage.module.css';
import { ShowsCarousel } from '../../components/ShowsCarousel';
import { mockShows } from '../../mock/mockShows';
import { useEffect, useRef, useState } from 'react';

const AccountHomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateLeftOffset = () => {
      const leftOffset = el.getBoundingClientRect().left;
      setLeftOffset(leftOffset);
    };

    updateLeftOffset();

    window.addEventListener('resize', updateLeftOffset);
    return () => window.removeEventListener('resize', updateLeftOffset);
  }, []);

  return (
    <>
      <section
        className={styles.intro}
        style={{
          backgroundImage: `url(${heroUrl})`,
        }}
      >
        <div ref={ref} className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.mainText}>
              <div className={styles.logoWrapper}>
                <Logo />
                <p>Series</p>
              </div>
              <h1 className={styles.mainHeader}>
                House
                <br />
                of
                <br />
                ninjas
              </h1>
            </div>
            <p>
              Years after retiring from their formidable ninja lives, a dysfunctional family must
              return to shadowy missions to counteract a string of looming threats.
            </p>
            <div className={styles.buttonsWrapper}>
              <Button children="Play" variant="white" icon="playBlack" iconPosition="before" />
              <Button children="More Info" variant="secondary" icon="info" iconPosition="before" />
            </div>
          </div>
        </div>
        <div className={styles.ratingWrapper}>
          <a href="#" className={styles.replay}>
            <Replay />
          </a>
          <div className={styles.rating}>
            <MaturityRating rating="TV-14" />
          </div>
        </div>
      </section>
      <section className={styles.carousels}>
        <div style={{ paddingLeft: `${leftOffset}px` }} className={styles.wrapCarousel}>
          {mockShows.map((category, id) => (
            <ShowsCarousel
              key={id}
              title={category.title}
              images={category.images}
              className={styles.carousel}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AccountHomePage;
