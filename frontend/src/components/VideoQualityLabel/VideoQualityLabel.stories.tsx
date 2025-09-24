import type { Meta, StoryObj } from '@storybook/react-vite';

import VideoQualityLabel from './VideoQualityLabel';

const meta: Meta<typeof VideoQualityLabel> = {
  title: 'Components/VideoQualityLabel',
  component: VideoQualityLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VideoQualityLabel>;

export const HD: Story = {
  args: {
    type: 'HD',
  },
};

export const UltraHD4K: Story = {
  args: {
    type: 'UltraHD4K',
    className: 'Test',
  },
};

export const DolbyVision: Story = {
  args: {
    type: 'DolbyVision',
  },
};

export const HDR: Story = {
  args: {
    type: 'HDR',
  },
};

export const FourK: Story = {
  args: {
    type: '4K',
  },
};
