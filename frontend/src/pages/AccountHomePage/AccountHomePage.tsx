import { Button } from '../../components';
import Logo from '../../assets/icons/netflix-logo.svg?react';
import heroUrl from '../../assets/images/hero.webp';

import styles from './AccountHomePage.module.css';

const AccountHomePage = () => {
  return (
    <section
      className={styles.intro}
      style={{
        backgroundImage: `url(${heroUrl})`,
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.mainText}>
          <div className={styles.logoWrapper}>
            <Logo />
            <span>Series</span>
          </div>
          <h1 className={styles.mainHeader}>
            House
            <br />
            of
            <br />
            ninjas
          </h1>
        </div>
        <p className={styles.desc}>
          Years after retiring from their formidable ninja lives, a dysfunctional family must return
          to shadowy missions to counteract a string of looming threats.
        </p>
        <div className={styles.buttonsWrapper}>
          <Button children="Play" variant="white" icon="playBlack" iconPosition="before" />
          <Button children="More Info" variant="secondary" icon="info" iconPosition="before" />
        </div>
      </div>
    </section>
  );
};

export default AccountHomePage;
