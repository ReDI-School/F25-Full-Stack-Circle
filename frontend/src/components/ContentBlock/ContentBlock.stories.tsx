import type { Meta, StoryObj } from '@storybook/react-vite';

import { ContentBlock } from './ContentBlock';
import { ContentBlockConfig } from './constants';

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
  args: ContentBlockConfig[0],
};

export const LeftToRight: Story = {
  args: ContentBlockConfig[0],
};

export const RightToLeft: Story = {
  args: ContentBlockConfig[1],
};

export const DownloadShows: Story = {
  args: ContentBlockConfig[3],
};

export const KidsProfiles: Story = {
  args: ContentBlockConfig[2],
};

export const AllVariants: Story = {
  render: () => (
    <>
      {ContentBlockConfig.map((config, index) => (
        <ContentBlock key={index} {...config} />
      ))}
    </>
  ),
};

export const NetflixStyleSections: Story = {
  render: () => (
    <>
      {ContentBlockConfig.slice(0, 2).map((config, index) => (
        <ContentBlock key={index} {...config} />
      ))}
    </>
  ),
};

export const CustomContent: Story = {
  args: {
    headline: 'Your Custom Headline',
    description: 'Your custom description text that explains the feature or benefit in detail.',
    image: ContentBlockConfig[0].image,
    layout: 'left-to-right',
  },
};

export const LongHeadline: Story = {
  args: {
    headline: 'This is a very long headline to test how the component handles longer text content',
    description:
      'This is also a longer description to demonstrate how the component handles multiple lines of text and maintains proper spacing and readability across different screen sizes.',
    image: ContentBlockConfig[0].image,
    layout: 'left-to-right',
  },
};

export const ShortContent: Story = {
  args: {
    headline: 'Short',
    description: 'Brief description.',
    image: ContentBlockConfig[1].image,
    layout: 'right-to-left',
  },
};
