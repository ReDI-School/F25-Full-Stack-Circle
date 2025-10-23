import type { Meta, StoryObj } from '@storybook/react-vite';
import PageTemplate from './PageTemplate';

const meta: Meta<typeof PageTemplate> = {
  title: 'Components/PageTemplate',
  component: PageTemplate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageTemplate>;

export const Default: Story = {
  args: {
    children: 'Menu',
    imageLink: 'https://wallpapercave.com/wp/wp14818817.webp',
    backGroundColor: '',
  },
};
//
