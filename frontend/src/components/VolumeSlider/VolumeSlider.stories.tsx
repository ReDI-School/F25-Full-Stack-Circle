import type { Meta, StoryObj } from '@storybook/react-vite';
import { VolumeSlider } from './index';
import styles from './VolumeSlider.module.css';

const meta: Meta<typeof VolumeSlider> = {
  title: 'Components/VolumeSlider',
  component: VolumeSlider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VolumeSlider>;

export const Default: Story = {
  args: {
    value: 50,
    onChange: (value: number) => {
      console.log('Volume changed to:', value);
    },
  },
};

export const Muted: Story = {
  args: {
    value: 0,
    iconType: 'mute',
    onChange: (value: number) => {
      console.log('Volume changed to:', value);
    },
  },
};

export const MaxVolume: Story = {
  args: {
    value: 100,
    iconType: 'high',
    onChange: (value: number) => {
      console.log('Volume changed to:', value);
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <VolumeSlider
        className={styles.volumeSliderMute}
        value={0}
        iconType="mute"
        onChange={() => {}}
      />
      <VolumeSlider
        className={styles.volumeSliderMedium}
        value={50}
        iconType="middle"
        onChange={() => {}}
      />
      <VolumeSlider
        className={styles.volumeSliderHigh}
        value={100}
        iconType="high"
        onChange={() => {}}
      />
    </div>
  ),
};
