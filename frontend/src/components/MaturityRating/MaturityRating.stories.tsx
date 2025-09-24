import type { Meta, StoryObj } from '@storybook/react-vite';
import MaturityRating from './MaturityRating';

const meta: Meta<typeof MaturityRating> = {
  title: 'Components/MaturityRating',
  component: MaturityRating,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MaturityRating>;

export const Default: Story = {
  args: {
    rating: 'TV-Y',
  },
};
export const RatingG: Story = {
  args: {
    rating: 'G',
  },
};
export const RatingNC17: Story = {
  args: {
    rating: 'NC-17',
  },
};
export const RatingPG: Story = {
  args: {
    rating: 'PG',
  },
};
export const RatingPG13: Story = {
  args: {
    rating: 'PG-13',
  },
};
export const RatingR: Story = {
  args: {
    rating: 'R',
  },
};
export const RatingTV14: Story = {
  args: {
    rating: 'TV-14',
  },
};
export const RatingTVG: Story = {
  args: {
    rating: 'TV-G',
  },
};
export const RatingTVMA: Story = {
  args: {
    rating: 'TV-MA',
  },
};
export const RatingTVPG: Story = {
  args: {
    rating: 'TV-PG',
  },
};
export const RatingTVY7: Story = {
  args: {
    rating: 'TV-Y7',
  },
};

//npx storybook --version
//npx storybook@latest init
//error message: npm error Missing script: "storybook"
