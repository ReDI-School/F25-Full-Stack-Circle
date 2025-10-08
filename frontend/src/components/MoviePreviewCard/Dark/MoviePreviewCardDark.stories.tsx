import type { Meta, StoryObj } from '@storybook/react-vite';
import MoviePreviewCardDark from './MoviePreviewCardDark';

const meta: Meta<typeof MoviePreviewCardDark> = {
  title: 'Components/MoviePreviewCardDark',
  component: MoviePreviewCardDark,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MoviePreviewCardDark>;

export const Default: Story = {
  args: {
    children: 'Violent,Dark,Action',
    seasons: 2,
    newSeries: true,
    videoQuality: { type: 'HD' },
    maturityRating: { rating: 'TV-MA' },
  },
};
