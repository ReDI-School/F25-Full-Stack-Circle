import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VolumeSlider } from './index';
import MuteIcon from '../../assets/icons/muteVolume.svg?react';
import HighIcon from '../../assets/icons/highVolume.svg?react';
import MiddleIcon from '../../assets/icons/middleVolume.svg?react';

const meta: Meta<typeof VolumeSlider> = {
  title: 'Components/VolumeSlider',
  component: VolumeSlider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VolumeSlider>;

const getIconComponent = (iconType: 'Mute' | 'Middle' | 'High') => {
  if (iconType === 'Mute') return MuteIcon;
  if (iconType === 'High') return HighIcon;
  return MiddleIcon;
};

const InteractiveVolumeSlider = ({ initialValue = 50 }) => {
  const [value, setValue] = useState(initialValue);

  let iconType: 'Mute' | 'Middle' | 'High' = 'Middle';
  if (value === 0) iconType = 'Mute';
  else if (value >= 90) iconType = 'High';

  const IconComponent = getIconComponent(iconType);

  return (
    <VolumeSlider
      value={value}
      iconType={iconType}
      onChange={setValue}
      IconComponent={IconComponent}
    />
  );
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
