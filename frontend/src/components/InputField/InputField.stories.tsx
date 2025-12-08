import type { Meta, StoryFn } from '@storybook/react-vite';
import InputField from './InputField';
import type { InputFieldProps } from './InputField.types';
import { INPUT_SIZES, INPUT_TYPES, INPUT_STATES } from './InputField.types';

export default {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: [INPUT_SIZES.LARGE, INPUT_SIZES.MEDIUM] },
    type: {
      control: { type: 'radio' },
      options: [INPUT_TYPES.EMAIL, INPUT_TYPES.EMAIL_OR_PHONE, INPUT_TYPES.PASSWORD],
    },
    state: {
      control: { type: 'radio' },
      options: [INPUT_STATES.DEFAULT, INPUT_STATES.FOCUSED, INPUT_STATES.ERROR],
    },
  },
} as Meta<InputFieldProps>;

const Template: StoryFn<InputFieldProps> = (args: InputFieldProps) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = { size: INPUT_SIZES.MEDIUM, type: INPUT_TYPES.EMAIL, state: INPUT_STATES.DEFAULT };

export const Focused = Template.bind({});
Focused.args = { size: INPUT_SIZES.MEDIUM, type: INPUT_TYPES.EMAIL, state: INPUT_STATES.FOCUSED };

export const ErrorEmail = Template.bind({});
ErrorEmail.args = {
  size: INPUT_SIZES.MEDIUM,
  type: INPUT_TYPES.EMAIL,
  state: INPUT_STATES.ERROR,
  errorMessage: 'Please enter a valid email or phone number',
};

export const ErrorPassword = Template.bind({});
ErrorPassword.args = {
  size: INPUT_SIZES.MEDIUM,
  type: INPUT_TYPES.PASSWORD,
  state: INPUT_STATES.ERROR,
  errorMessage: 'Your password must contain between 4 and 60 characters',
};

export const Large = Template.bind({});
Large.args = {
  size: INPUT_SIZES.LARGE,
  type: INPUT_TYPES.EMAIL_OR_PHONE,
  state: INPUT_STATES.DEFAULT,
};
