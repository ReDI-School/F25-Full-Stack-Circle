import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './index';

const mockOptions = [
  { label: 'Original Language', value: 'placeholder' },
  { label: 'English', value: 'en' },
  { label: 'Deutsch', value: 'de' },
  { label: 'Ukrainian', value: 'uk' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: mockOptions,
    placeholder: 'Original Language',
  },
};
