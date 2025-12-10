import {
  Accordion,
  Button,
  ContentBlock,
  INPUT_SIZES,
  InputField,
  LandingPageEmail,
  contentBlockConfig,
} from '../../components';
import { landingSectionItems } from './constants';

import styles from './Landing.module.css';

const LandingPage = () => (
  <>
    <section className={`${styles.landingSection} ${styles.first}`}>
      <LandingPageEmail />
    </section>
    <section className={styles.landingSection}>
      {contentBlockConfig.map(({ headline, description, image, layout }) => (
        <ContentBlock
          key={headline}
          headline={headline}
          description={description}
          image={image}
          layout={layout}
        />
      ))}
    </section>
    <div id="faq" className={styles.accordion}>
      <h2>Frequently Asked Questions</h2>
      <Accordion items={landingSectionItems} />
    </div>
    <h5 className={styles.text}>
      Ready to watch? Enter your email to create or restart your membership.
    </h5>
    <div className={styles.emailContainer}>
      <InputField size={INPUT_SIZES.LARGE} />
      <Button size="large" icon="chevron" onClick={() => {}}>
        Get Started
      </Button>
    </div>
  </>
);

export default LandingPage;
