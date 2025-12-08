import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import ShowDetailsDialog from './ShowDetailsDialog';
import { Button } from '../Button';

const meta: Meta<typeof ShowDetailsDialog> = {
  title: 'Components/ShowDetailsDialog',
  component: ShowDetailsDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Netflix-style show details dialog component with smooth opening animations. Displays show information for a Title entity. Only requires videoUrl, title, and description - all other UI elements use default values for showcase purposes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShowDetailsDialog>;

const ShowDetailsDialogWrapper = (args: Parameters<typeof ShowDetailsDialog>[0]) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Show Details Dialog</Button>
      <ShowDetailsDialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ShowDetailsDialogWrapper {...args} />,
  args: {
    title: 'HOUSE OF NINJAS',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      'Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.',
  },
};

export const WithCustomEpisodes: Story = {
  render: (args) => <ShowDetailsDialogWrapper {...args} />,
  args: {
    title: 'HOUSE OF NINJAS',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      'Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.',
    episodes: [
      {
        id: 1,
        url: 'https://vimeo.com/679974686',
        number: 1,
        thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80',
        title: 'Episode 1: The Beginning',
        description:
          'The story begins as our heroes embark on an epic journey filled with adventure and mystery.',
        duration: 2700000, // 45 minutes in milliseconds
      },
      {
        id: 2,
        url: 'https://vimeo.com/679974686',
        number: 2,
        thumbnail: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80',
        title: 'Episode 2: The Challenge',
        description:
          'Facing their greatest challenge yet, the team must work together to overcome impossible odds.',
        duration: 3000000, // 50 minutes in milliseconds
      },
      {
        id: 3,
        url: 'https://vimeo.com/679974686',
        number: 3,
        thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80',
        title: 'Episode 3: The Revelation',
        description:
          'Secrets are revealed that change everything, forcing our heroes to question everything they know.',
        duration: 2880000, // 48 minutes in milliseconds
      },
    ],
  },
};
