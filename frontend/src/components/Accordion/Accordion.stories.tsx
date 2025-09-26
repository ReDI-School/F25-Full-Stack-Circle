import type { Meta, StoryObj } from '@storybook/react-vite';
import Accordion from './Accordion';

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
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items,
    defaultOpenItem: '1',
  },
};
