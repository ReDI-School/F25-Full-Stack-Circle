import type { Meta, StoryFn } from '@storybook/react-vite';
import VideoControlBar from './VideoControlBar';
import { ProgressBar, type ProgressBarProps } from '../ProgressBar';
import type { VideoControlBarProps } from './VideoControlBar.types';
import { useState } from 'react';
// import { Button } from '../Button';


const meta: Meta<VideoControlBarProps> = {
  title: 'Components/VideoControlBar',
  component: VideoControlBar,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<ProgressBarProps> = (args: ProgressBarProps) => {
  const [value, setValue] = useState(args.value);
  const handleNewValue = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ position: 'relative', width: 800, height: 400 }}>
      <VideoControlBar>
        <ProgressBar
          {...args}
          value={value}
          setNewValue={(newValue: number) => handleNewValue(newValue)}
          duration={args.duration}
          loaded={args.loaded}
          showThumb={args.showThumb}
        />
        <div>
          {/* <Button type="button" icon={"play"} iconOnly variant='outlined' /> */}
          {/* <button style={{backgroundColor: 'transparent', borderStyle: 'none'  }} type='button'>
            <PlayIcon color='white' />
          </button> */}
        </div>
      </VideoControlBar>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 60,
  showThumb: true,
  loaded: 80,
  duration: 200,
};
