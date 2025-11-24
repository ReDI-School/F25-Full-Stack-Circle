import { ContentBlock, LandingPageEmail, contentBlockConfig } from '../../components';
import styles from './Landing.module.css';

const LandingPage = () => {
  return (
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
      <section className={styles.landingSection}>
        <LandingPageEmail hideTitle hideSubtitle />
      </section>
    </>
  );
};

export default LandingPage;
