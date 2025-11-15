import type { Meta, StoryObj } from '@storybook/react';
import { ShowsCarousel } from './ShowsCarousel';
import type { ShowsCarouselProps } from './ShowsCarousel.types';

//  Dynamic import of all PNGs from /src/assets/shows
const images = import.meta.glob('../../assets/shows/*.png', { eager: true });

const sampleImages = Object.values(images).map((img: any) => img.default);

const meta: Meta<typeof ShowsCarousel> = {
  title: 'Components/ShowsCarousel',
  component: ShowsCarousel,
};
export default meta;

export const Default: StoryObj<ShowsCarouselProps> = {
  args: {
    title: 'Popular Shows',
    images: sampleImages,
  },
};
