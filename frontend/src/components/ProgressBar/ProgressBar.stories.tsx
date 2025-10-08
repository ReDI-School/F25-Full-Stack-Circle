import type { Meta, StoryObj } from '@storybook/react-vite';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Beginning: Story = {
  args: {
    value: 2,
    showThumb: true,
    loaded: 12,
    duration: 3600
  },
};

export const ProgressDefault: Story = {
  args: {
    value: 60,
    showThumb: true,
    loaded: 80,
    duration: 200
  },
};

export const ProgressHover: Story = {
  args: {
    value: 80,
    showThumb: true,
    loaded: 100,
    duration: 540
  },
};
