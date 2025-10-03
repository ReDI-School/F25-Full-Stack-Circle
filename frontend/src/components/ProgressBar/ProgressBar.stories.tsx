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
    currentLabel: '00:12',
    maxLabel: '1:00:41',
    showThumb: true,
    loaded: 12,
  },
};

export const ProgressDefault: Story = {
  args: {
    value: 60,
    currentLabel: '1:00:41',
    maxLabel: '1:00:41',
    showThumb: true,
    loaded: 80,
  },
};

export const ProgressHover: Story = {
  args: {
    value: 80,
    currentLabel: '1:00:41',
    maxLabel: '1:00:41',
    showThumb: true,
    loaded: 100,
  },
};
