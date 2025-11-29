import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlaybackSpeed } from './index';

const meta: Meta<typeof PlaybackSpeed> = {
  title: 'Components/PlaybackSpeed',
  component: PlaybackSpeed,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PlaybackSpeed>;

const InteractivePlaybackSpeed = ({ initialValue = 1 }: { initialValue?: number }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: number) => {
    console.log('Playback speed changed to:', newValue);
    setValue(newValue);
  };

  return (
    <div>
      <PlaybackSpeed value={value} onChange={handleChange} />
      <div style={{ marginTop: '20px', color: '#fff', textAlign: 'center' }}>
        Current Speed: {value}x
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <InteractivePlaybackSpeed />,
};

export const SlowSpeed: Story = {
  render: () => <InteractivePlaybackSpeed initialValue={0.5} />,
};

export const NormalSpeed: Story = {
  render: () => <InteractivePlaybackSpeed initialValue={1} />,
};

export const FastSpeed: Story = {
  render: () => <InteractivePlaybackSpeed initialValue={1.5} />,
};

export const AllSpeeds: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <InteractivePlaybackSpeed initialValue={0.5} />
      <InteractivePlaybackSpeed initialValue={0.75} />
      <InteractivePlaybackSpeed initialValue={1} />
      <InteractivePlaybackSpeed initialValue={1.25} />
      <InteractivePlaybackSpeed initialValue={1.5} />
    </div>
  ),
};
