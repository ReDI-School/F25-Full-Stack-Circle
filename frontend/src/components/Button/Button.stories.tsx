import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Stretch: Story = {
  args: {
    children: 'Button',
    stretch: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="white">White</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Submit',
    fullWidth: true,
  },
};

export const SignInLargeFullWidth: Story = {
  args: {
    children: 'Sign In',
    variant: 'primary',
    size: 'large',
    fullWidth: true,
  },
};

export const SignInMedium: Story = {
  args: {
    children: 'Sign In',
    variant: 'primary',
    size: 'medium',
  },
};

export const SecondaryFullWidth: Story = {
  args: {
    children: 'Use a Sign-In Code',
    variant: 'secondary',
    fullWidth: true,
  },
};

export const WhiteWithPlayIcon: Story = {
  args: {
    children: 'Play',
    variant: 'white',
    icon: 'playBlack',
    iconPosition: 'before',
  },
};

export const SecondaryWithInfoIcon: Story = {
  args: {
    children: 'More Info',
    variant: 'secondary',
    icon: 'info',
    iconPosition: 'before',
  },
};

export const GetStartedWithChevron: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    size: 'large',
    icon: 'chevron',
    iconPosition: 'after',
  },
};

export const OutlinedManageProfiles: Story = {
  args: {
    children: 'Manage Profiles',
    variant: 'outlined',
  },
};

export const SecondaryWithBackIcon: Story = {
  args: {
    children: 'Go Back',
    variant: 'secondary',
    icon: 'back',
    iconPosition: 'before',
  },
};

export const SecondaryWithOnlyIcon: Story = {
  args: {
    icon: 'close',
    variant: 'secondary',
    'aria-label': 'Close',
    iconOnly: true,
  },
};

export const ButtonExamples: Story = {
  render: () => (
    <>
      <Button variant="primary" size="large" fullWidth>
        Sign In
      </Button>

      <Button variant="primary" size="medium">
        Sign In
      </Button>

      <Button variant="secondary" fullWidth>
        Use a Sign-In Code
      </Button>

      <Button variant="white" icon="playBlack" iconPosition="before">
        Play
      </Button>
      <Button variant="secondary" icon="info" iconPosition="before">
        More Info
      </Button>

      <Button variant="primary" size="large" icon="chevron" iconPosition="after">
        Get Started
      </Button>

      <Button variant="outlined">Manage Profiles</Button>

      <Button variant="primary">Click me</Button>

      <Button variant="secondary">Cancel</Button>

      <Button variant="white">Learn More</Button>

      <Button variant="outlined">Get Started</Button>

      <Button variant="primary" size="medium">
        Medium Button
      </Button>

      <Button variant="primary" size="large">
        Large Button
      </Button>

      <Button variant="primary" icon="chevron">
        Get Started
      </Button>

      <Button variant="outlined" icon="play" iconPosition="before">
        Play Video
      </Button>

      <Button variant="secondary" icon="close" iconOnly aria-label="Close" />

      <Button variant="primary" fullWidth>
        Submit
      </Button>

      <Button variant="primary" disabled>
        Disabled Button
      </Button>
    </>
  ),
};
