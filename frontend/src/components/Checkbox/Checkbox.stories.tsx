import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    label: {
      control: 'text',
      description: 'The label text for the checkbox',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when checkbox state changes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Unchecked / Default
export const UncheckedDefault: Story = {
  args: {
    label: 'Remember me',
    checked: false,
  },
};
// Unchecked / Hover
export const UncheckedHover: Story = {
  args: {
    label: 'Remember me',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the checkbox to see the effect.',
      },
    },
  },
};
// Checked / Default
export const CheckedDefault: Story = {
  args: {
    label: 'Remember me',
    checked: true,
  },
};

// Checked / Hover
export const CheckedHover: Story = {
  args: {
    label: 'Remember me',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the checkbox to see the effect.',
      },
    },
  },
};
