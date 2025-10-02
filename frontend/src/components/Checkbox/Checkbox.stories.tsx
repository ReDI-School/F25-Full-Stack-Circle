import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
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
};
