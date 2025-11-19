import { ContentBlock } from '../../components/ContentBlock';
import { ContentBlockConfig } from '../../components/ContentBlock/constants';
import { LandingPageEmail } from '../../components/LandingPageEmail';

const LandingPage = () => {
  return (
    <>
      <LandingPageEmail />
      {ContentBlockConfig.map(({ headline, description, image, layout }) => (
        <ContentBlock
          key={headline}
          headline={headline}
          description={description}
          image={image}
          layout={layout}
        />
      ))}
    </>
  );
};

export default LandingPage;
