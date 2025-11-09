import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VolumeSlider } from './index';

const meta: Meta<typeof VolumeSlider> = {
  title: 'Components/VolumeSlider',
  component: VolumeSlider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the volume slider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VolumeSlider>;

const InteractiveVolumeSlider = ({
  initialValue = 50,
  orientation = 'vertical',
}: {
  initialValue?: number;
  orientation?: 'vertical' | 'horizontal';
}) => {
  const [value, setValue] = useState(initialValue / 100);

  return <VolumeSlider value={value} onChange={setValue} orientation={orientation} />;
};

export const Default: Story = {
  render: () => <InteractiveVolumeSlider initialValue={50} />,
};

export const Vertical: Story = {
  render: () => <InteractiveVolumeSlider initialValue={50} orientation="vertical" />,
};

export const Horizontal: Story = {
  render: () => <InteractiveVolumeSlider initialValue={50} orientation="horizontal" />,
};

export const AllVariantsVertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <InteractiveVolumeSlider initialValue={0} orientation="vertical" />
      <InteractiveVolumeSlider initialValue={50} orientation="vertical" />
      <InteractiveVolumeSlider initialValue={100} orientation="vertical" />
    </div>
  ),
};

export const AllVariantsHorizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <InteractiveVolumeSlider initialValue={0} orientation="horizontal" />
      <InteractiveVolumeSlider initialValue={50} orientation="horizontal" />
      <InteractiveVolumeSlider initialValue={100} orientation="horizontal" />
    </div>
  ),
};
