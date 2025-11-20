import { useState } from 'react';

import { Button } from '../Button';
import InputField from '../InputField';

import styles from './LandingPageEmail.module.css';

const LandingPageEmail = () => {
  const [email, setEmail] = useState('');

  const handleGetStarted = () => {
    console.log('Email submitted:', email);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.textL}>Unlimited movies, TV shows, and more</h1>
      <h4 className={styles.textM}>Watch anywhere. Cancel anytime.</h4>
      <h5 className={styles.textS}>
        Ready to watch? Enter your email to create or restart your membership.
      </h5>
      <div className={styles.email}>
        <InputField size="Large" value={email} onChange={setEmail} />
        <Button size="large" icon="chevron" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default LandingPageEmail;
