import { useState } from 'react';

import { Button } from '../Button';
import InputField from '../InputField';
import { INPUT_SIZES } from '../InputField/InputField.types';

import styles from './LandingPageEmail.module.css';

type LandingPageEmailProps = {
  hideTitle?: boolean;
  hideSubtitle?: boolean;
};

const LandingPageEmail = ({ hideTitle, hideSubtitle }: LandingPageEmailProps) => {
  const [email, setEmail] = useState('');

  const handleGetStarted = () => {
    console.log('Email submitted:', email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className={styles.container}>
      {!hideTitle && <h1 className={styles.textL}>Unlimited movies, TV shows, and more</h1>}
      {!hideSubtitle && <h4 className={styles.textM}>Watch anywhere. Cancel anytime.</h4>}
      <h5 className={styles.textS}>
        Ready to watch? Enter your email to create or restart your membership.
      </h5>
      <div className={styles.emailContainer}>
        <InputField size={INPUT_SIZES.LARGE} value={email} onChange={handleEmailChange} />
        <Button size="large" icon="chevron" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default LandingPageEmail;
