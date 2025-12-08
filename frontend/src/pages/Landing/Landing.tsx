import { Accordion } from '../../components';
import { ContentBlock } from '../../components/ContentBlock';
import { ContentBlockConfig } from '../../components/ContentBlock/constants';
import { LandingPageEmail } from '../../components/LandingPageEmail';
import styles from './Landing.module.css';
import InputField from '../../components/InputField';
import { INPUT_SIZES } from '../../components/InputField/InputField.types';
import { Button } from '../../components/Button';

const LandingPage = () => {
  const items = [
    {
      id: '1',
      title: 'What is Netflix?',
      content:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
      id: '2',
      title: 'How much does Netflix cost?',
      content:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.',
    },
    {
      id: '3',
      title: 'Where can I watch?',
      content:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.',
    },
    {
      id: '4',
      title: 'How do I cancel?',
      content:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.',
    },
    {
      id: '6',
      title: 'What can I watch on Netflix?',
      content:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.',
    },
    {
      id: '7',
      title: 'Is Netflix good for kids??',
      content:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.',
    },
  ];
  const handleGetStarted = () => {
    console.log('Email submitted:');
  };
  return (
    <>
      <LandingPageEmail />
      {ContentBlockConfig.map(({ headline, description, image, layout }) => (
        <>
          <ContentBlock
            key={headline}
            headline={headline}
            description={description}
            image={image}
            layout={layout}
          />
        </>
      ))}
      <div className={styles.accordion}>
        <h2>Frequently Asked Questions</h2>
        <Accordion items={items} />
      </div>
      <h4 className={styles.text}>
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <div className={styles.emailContainer}>
        <InputField size={INPUT_SIZES.LARGE} />
        <Button size="large" icon="chevron" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
