import type { Meta, StoryFn } from '@storybook/react-vite';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import type { ProgressBarProps } from './ProgressBar.types';

const meta: Meta<ProgressBarProps> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export default meta;

// I had to add a template so I can use useState which allows the progress bar to be standalone
// refer to this link: https://javascript.plainenglish.io/a-guide-to-documenting-controlled-components-with-storybook-10b889c03f87
const Template: StoryFn<ProgressBarProps> = (args: ProgressBarProps) => {
  const [value, setValue] = useState(args.value);
  const handleNewValue = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <ProgressBar
      {...args}
      value={value}
      setNewValue={(newValue: number) => handleNewValue(newValue)}
      duration={args.duration}
      loaded={args.loaded}
      showThumb={args.showThumb}
    />
  );
};

export const Beginning = Template.bind({});
Beginning.args = {
  value: 0,
  showThumb: true,
  loaded: 100,
  duration: 4900,
};

export const ProgressDefault = Template.bind({});
ProgressDefault.args = {
  value: 60,
  showThumb: true,
  loaded: 80,
  duration: 200,
};

export const ProgressHover = Template.bind({});
ProgressHover.args = {
  value: 80,
  showThumb: true,
  loaded: 100,
  duration: 540,
};
