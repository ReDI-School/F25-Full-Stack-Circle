import type { Meta, StoryObj } from '@storybook/react-vite';
import RatingGroup from './RatingGroup';
import { IconButton } from '../IconButton';

const meta: Meta<typeof RatingGroup> = {
  title: 'Components/RatingGroup',
  component: RatingGroup,
  tags: ['autodocs'],
};

export default meta;

const createIconButtons = (size: 'small' | 'medium' | 'large') => {
  return [
    <IconButton icon="thumbs-down" size={size} variant="outlined" theme="primary" />,
    <IconButton icon="thumbs-up" size={size} variant="outlined" theme="primary" selected />,
    <IconButton icon="double-thumbs-up" size={size} variant="outlined" theme="primary" />,
  ];
};

type Story = StoryObj<typeof RatingGroup>;

export const Small: Story = {
  args: {
    children: createIconButtons('small'),
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: createIconButtons('medium'),
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: createIconButtons('large'),
    size: 'large',
  },
};
