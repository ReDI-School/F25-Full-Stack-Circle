import type { Meta, StoryObj } from '@storybook/react-vite';
import ShowCardsContainer from './ShowCardsContainer';
import { mockData } from '../../mock/mockData';

const meta = {
  title: 'Components/ShowCardsContainer',
  component: ShowCardsContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShowCardsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TVShows: Story = {
  args: {
    cards: mockData.filter((show) => show.type === 'SERIES'),
  },
};

export const Movies: Story = {
  args: {
    cards: mockData.filter((show) => show.type === 'MOVIE'),
  },
};

export const AllContent: Story = {
  args: {
    cards: mockData,
  },
};

export const WithVariant: Story = {
  args: {
    cards: mockData.filter((show) => show.type === 'SERIES').slice(0, 5),
    variant: 'moreLikeThis',
  },
};
