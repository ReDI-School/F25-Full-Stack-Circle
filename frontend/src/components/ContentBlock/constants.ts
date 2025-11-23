import DevicesShowcase from '../../assets/images/devices-showcase.png';
import DownloadShowcase from '../../assets/images/download-showcase.png';
import KidsShowcase from '../../assets/images/kids-showcase.png';
import TvShowcase from '../../assets/images/tv-showcase.png';
import type { Layout } from './ContentBlock.types';

export const ContentBlockConfig = [
  {
    headline: 'Enjoy on your TV',
    description:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    image: TvShowcase,
    layout: 'left-to-right' as Layout,
  },
  {
    headline: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    image: DevicesShowcase,
    layout: 'right-to-left' as Layout,
  },
  {
    headline: 'Create profiles for kids',
    description:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    image: KidsShowcase,
    layout: 'right-to-left' as Layout,
  },
  {
    headline: 'Download your shows to watch offline',
    description: 'Save your favorites easily and always have something to watch.',
    image: DownloadShowcase,
    layout: 'left-to-right' as Layout,
  },
];
