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

export const Default: Story = {
  args: {
    children: [
      <IconButton icon="thumbs-down" variant="outlined" theme="primary" selected/>,
      <IconButton icon="thumbs-up" variant="outlined" theme="primary"  selected={false} />,
      <IconButton icon="double-thumbs-up" variant="outlined" theme="primary" selected={false} />,
    ],
  },
};
