import type { Meta, StoryObj } from '@storybook/react-vite';
import HomepageHeader from './HomepageHeader';

const meta: Meta<typeof HomepageHeader> = {
  title: 'Components/HomepageHeader',
  component: HomepageHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['LandingPage', 'HomePage'],
      description: 'The type of header to display',
    },
    currentPage: {
      control: 'select',
      options: ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Languages'],
      description: 'Currently active navigation item (HomePage only)',
    },
    userAvatar: {
      control: 'text',
      description: 'URL for user avatar image (HomePage only)',
    },
    onSignIn: { action: 'onSignIn' },
    onLanguageChange: { action: 'onLanguageChange' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#141414',
          paddingBottom: '100px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HomepageHeader>;

export const LandingPage: Story = {
  args: {
    type: 'LandingPage',
  },
};

export const HomePage: Story = {
  args: {
    type: 'HomePage',
    currentPage: 'Home',
  },
};

export const HomePageTVShows: Story = {
  args: {
    type: 'HomePage',
    currentPage: 'TV Shows',
  },
};

export const HomePageMovies: Story = {
  args: {
    type: 'HomePage',
    currentPage: 'Movies',
  },
};

export const HomePageWithCustomAvatar: Story = {
  args: {
    type: 'HomePage',
    currentPage: 'Home',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
  },
};
