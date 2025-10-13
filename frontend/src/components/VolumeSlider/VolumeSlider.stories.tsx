import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VolumeSlider } from './index';

const meta: Meta<typeof VolumeSlider> = {
  title: 'Components/VolumeSlider',
  component: VolumeSlider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VolumeSlider>;

const InteractiveVolumeSlider = ({ initialValue = 50 }) => {
  const [value, setValue] = useState(initialValue);

  return <VolumeSlider value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: () => <InteractiveVolumeSlider initialValue={50} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <InteractiveVolumeSlider initialValue={0} />
      <InteractiveVolumeSlider initialValue={50} />
      <InteractiveVolumeSlider initialValue={100} />
    </div>
  ),
};
