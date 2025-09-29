import type { Meta, StoryObj } from '@storybook/react-vite';
import RatingGroup from './RatingGroup';
import { IconButton } from '../IconButton';

const meta: Meta<typeof RatingGroup> = {
  title: 'Components/RatingGroup',
  component: RatingGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RatingGroup>;

export const Small: Story = {
  args: {
    children: [
      <IconButton key={0} icon="thumbs-down" size='small' variant="outlined" theme="primary" selected />,
      <IconButton key={1} icon="thumbs-up" size='small' variant="outlined" theme="primary" selected={false} />,
      <IconButton key={2} icon="double-thumbs-up" size='small' variant="outlined" theme="primary" selected={false} />,
    ],
    size: 'small'
  },
};

export const Medium: Story = {
  args: {
    children: [
      <IconButton key={0} icon="thumbs-down" size='medium' variant="outlined" theme="primary" selected />,
      <IconButton key={1} icon="thumbs-up" size='medium' variant="outlined" theme="primary" selected={false} />,
      <IconButton key={2} icon="double-thumbs-up" size='medium' variant="outlined" theme="primary" selected={false} />,
    ],
    size: 'medium'
  },
};

export const Large: Story = {
  args: {
    children: [
      <IconButton key={0} icon="thumbs-down" size='large' variant="outlined" theme="primary" selected />,
      <IconButton key={1} icon="thumbs-up" size='large' variant="outlined" theme="primary" selected={false} />,
      <IconButton key={2} icon="double-thumbs-up" size='large' variant="outlined" theme="primary" selected={false} />,
    ],
    size: 'large'
  },
};
