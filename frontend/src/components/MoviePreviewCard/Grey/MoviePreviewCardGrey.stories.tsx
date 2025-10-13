import type { Meta, StoryObj } from '@storybook/react-vite';
import MoviePreviewCardGrey from './MoviePreviewCardGrey';

const meta: Meta<typeof MoviePreviewCardGrey> = {
  title: 'Components/MoviePreviewCardGrey',
  component: MoviePreviewCardGrey,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MoviePreviewCardGrey>;

export const Default: Story = {
  args: {
    children:
      'The fellowship is broken, but the quest continues. As Frodo and Sam journey toward Mordor, Aragorn, Legolas, and Gimli rally kingdoms against the rising power of Sauron.',
    videoQuality: { type: 'HD' },
    maturityRating: { rating: 'TV-MA' },
    year: 2002,
    duration: 150,
  },
};
