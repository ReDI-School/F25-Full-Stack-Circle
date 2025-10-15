//import type { LandingPageEmailProps } from './LandingPageEmail.types';
import styles from './LandingPageEmail.module.css';

const LandingPageEmail = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.textL}>Unlimited movies, TV shows, and more</h1>
        <h4 className={styles.textM}>Watch anywhere. Cancel anytime.</h4>
        <h5 className={styles.textS}>
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
      </div>
    </>
  );
};

export default LandingPageEmail;

{
  /*{ children }: LandingPageEmailProps*/
}
