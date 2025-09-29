import type { Meta, StoryObj } from '@storybook/react-vite';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: 'play',
  },
};

export const Disabled: Story = {
  args: {
    icon: 'play',
    disabled: true,
  },
};

export const Selected: Story = {
  args: {
    icon: 'play',
    selected: true,
  },
};

export const Small: Story = {
  args: {
    icon: 'play',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    icon: 'play',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    icon: 'play',
    size: 'large',
  },
};

export const PrimaryTheme: Story = {
  args: {
    icon: 'play',
    theme: 'primary',
  },
};

export const SecondaryTheme: Story = {
  args: {
    icon: 'play',
    theme: 'secondary',
  },
};

export const FilledVariant: Story = {
  args: {
    icon: 'play',
    variant: 'filled',
  },
};

export const OutlinedVariant: Story = {
  args: {
    icon: 'play',
    variant: 'outlined',
  },
};
