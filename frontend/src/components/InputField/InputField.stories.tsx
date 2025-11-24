import type { Meta, StoryFn } from '@storybook/react-vite';
import InputField from './InputField';
import type { InputFieldProps } from './InputField.types';

export default {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['Large', 'medium'] },
    type: { control: { type: 'radio' }, options: ['Email', 'EmailOrPhone', 'Password'] },
    state: { control: { type: 'radio' }, options: ['Default', 'Focused', 'Error'] },
  },
} as Meta<InputFieldProps>;

const Template: StoryFn<InputFieldProps> = (args: InputFieldProps) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = { size: 'medium', type: 'email', state: 'default' };

export const Focused = Template.bind({});
Focused.args = { size: 'medium', type: 'email', state: 'focused' };

export const ErrorEmail = Template.bind({});
ErrorEmail.args = {
  size: 'medium',
  type: 'email',
  state: 'error',
  errorMessage: 'Please enter a valid email or phone number',
};

export const ErrorPassword = Template.bind({});
ErrorPassword.args = {
  size: 'medium',
  type: 'password',
  state: 'error',
  errorMessage: 'Your password must contain between 4 and 60 characters',
};

export const Large = Template.bind({});
Large.args = { size: 'large', type: 'emailOrPhone', state: 'default' };
