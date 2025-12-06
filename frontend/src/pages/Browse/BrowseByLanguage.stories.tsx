import type { Meta, StoryObj } from '@storybook/react-vite';
import languagePage from './BrowseByLanguage';

const mockOptions = [
  { id: '1', title: 'The Matrix', language: 'English', thumbnail: '/posters/matrix.jpg' },
  { id: '2', title: 'Amélie', language: 'French', thumbnail: '/posters/amelie.jpg' },
  { id: '3', title: 'Spirited Away', language: 'Japanese', thumbnail: '/posters/spiritedaway.jpg' },
  { id: '4', title: 'Roma', language: 'Spanish', thumbnail: '/posters/roma.jpg' },
  { id: '5', title: 'Parasite', language: 'Korean', thumbnail: '/posters/parasite.jpg' },
  { id: '6', title: 'The Matrix2', language: 'Arabic', thumbnail: '/posters/matrix.jpg' },
];

const meta: Meta<typeof languagePage> = {
  title: 'Page/languagePage',
  component: languagePage,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof languagePage>;

export const Default: Story = {
  args: {
    options: mockOptions,
  },
};
