import type { Meta, StoryObj } from '@storybook/react-vite';

import { ContentBlock } from './ContentBlock';
import tvShowcase from '../../assets/images/tv-showcase.png';
import devicesShowcase from '../../assets/images/devices-showcase.png';
import kidsShowcase from '../../assets/images/kids-showcase.png';
import downloadShowcase from '../../assets/images/download-showcase.png';

const meta: Meta<typeof ContentBlock> = {
  title: 'Components/ContentBlock',
  component: ContentBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContentBlock>;

export const Default: Story = {
  args: {
    headline: 'Enjoy on your TV',
    description:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image: tvShowcase,
    layout: 'left-to-right',
  },
};

export const LeftToRight: Story = {
  args: {
    headline: 'Enjoy on your TV',
    description:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image: tvShowcase,
    layout: 'left-to-right',
  },
};

export const RightToLeft: Story = {
  args: {
    headline: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    image: devicesShowcase,
    layout: 'right-to-left',
  },
};

export const DownloadShows: Story = {
  args: {
    headline: 'Download your shows to watch offline',
    description: 'Save your favorites easily and always have something to watch.',
    image: downloadShowcase,
    layout: 'left-to-right',
  },
};

export const KidsProfiles: Story = {
  args: {
    headline: 'Create profiles for kids',
    description:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    image: kidsShowcase,
    layout: 'right-to-left',
  },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <ContentBlock
        headline="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image={tvShowcase}
        layout="left-to-right"
      />
      <ContentBlock
        headline="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image={devicesShowcase}
        layout="right-to-left"
      />
      <ContentBlock
        headline="Download your shows to watch offline"
        description="Save your favorites easily and always have something to watch."
        image={downloadShowcase}
        layout="left-to-right"
      />
      <ContentBlock
        headline="Create profiles for kids"
        description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        image={kidsShowcase}
        layout="right-to-left"
      />
    </>
  ),
};

export const NetflixStyleSections: Story = {
  render: () => (
    <>
      <ContentBlock
        headline="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image={tvShowcase}
        layout="left-to-right"
      />
      <ContentBlock
        headline="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image={devicesShowcase}
        layout="right-to-left"
      />
    </>
  ),
};

export const CustomContent: Story = {
  args: {
    headline: 'Your Custom Headline',
    description: 'Your custom description text that explains the feature or benefit in detail.',
    image: tvShowcase,
    layout: 'left-to-right',
  },
};

export const LongHeadline: Story = {
  args: {
    headline: 'This is a very long headline to test how the component handles longer text content',
    description:
      'This is also a longer description to demonstrate how the component handles multiple lines of text and maintains proper spacing and readability across different screen sizes.',
    image: tvShowcase,
    layout: 'left-to-right',
  },
};

export const ShortContent: Story = {
  args: {
    headline: 'Short',
    description: 'Brief description.',
    image: devicesShowcase,
    layout: 'right-to-left',
  },
};
