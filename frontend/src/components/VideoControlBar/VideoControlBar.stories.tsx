import type { Meta, StoryFn } from '@storybook/react-vite';
import { VideoControlBar } from './index';
import type { VideoControlBarProps } from './index';
import { useRef, useState } from 'react';

const meta: Meta<VideoControlBarProps> = {
  title: 'Components/VideoControlBar',
  component: VideoControlBar,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<VideoControlBarProps> = (args: VideoControlBarProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(args.isPlaying);

  const [currentTime, setCurrentTime] = useState(args.progressBarProps.value);
  const handleCurrentTimeChange = (newTime: number) => {
    setCurrentTime(newTime);
  };

  const [volume, setVolume] = useState(args.volumeSliderProps.value);
  const [playbackSpeed, setPlaybackSpeed] = useState(args.playbackSpeedProps.value);

  const handlePlaybackSpeedChange = (value: number) => {
    setPlaybackSpeed(value);
  };

  const handleVolumeChange = (newValue: number) => {
    setVolume(newValue);
  };

  const handleOnPlayButtonClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleOnRewindButtonClick = () => {
    setCurrentTime((prev) => prev - 10);
  };

  const handleOnForwardButtonClick = () => {
    setCurrentTime((prev) => prev + 10);
  };

  const handleOnPlaybackButtonClick = () => {
    alert('Displays the Playback component (not yet implemented).');
  };

  const handleOnCaptionButtonClick = () => {
    alert('Displays the Caption component (not yet implemented).');
  };

  const handleOnNextButtonClick = () => {
    alert('Displays the Next Episode component (not yet merged).');
  };

  const handleOnEpisodeListButtonClick = () => {
    alert('Displays the Episode List component (not yet merged).');
  };

  const handleOnFullscreenButtonClick = () => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      if (isFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        wrapper.requestFullscreen();
        setIsFullscreen(true);
      }
    }
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', height: 400 }}>
      <VideoControlBar
        title={args.title}
        isPlaying={isPlaying}
        progressBarProps={{
          ...args.progressBarProps,
          value: currentTime,
          setNewValue: handleCurrentTimeChange,
        }}
        volumeSliderProps={{
          ...args.volumeSliderProps,
          value: volume,
          onChange: handleVolumeChange,
        }}
        playbackSpeedProps={{
          ...args.playbackSpeedProps,
          value: playbackSpeed,
          onChange: handlePlaybackSpeedChange,
        }}
        onPlayButtonClick={handleOnPlayButtonClick}
        onCaptionButtonClick={handleOnCaptionButtonClick}
        onRewindButtonClick={handleOnRewindButtonClick}
        onForwardButtonClick={handleOnForwardButtonClick}
        onPlaybackButtonClick={handleOnPlaybackButtonClick}
        onNextButtonClick={handleOnNextButtonClick}
        onEpisodeListButtonClick={handleOnEpisodeListButtonClick}
        onFullscreenButtonClick={handleOnFullscreenButtonClick}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Sanctuary E1 Episode 1',
  isPlaying: true,
  volumeSliderProps: {
    value: 20,
  },
  progressBarProps: {
    value: 63,
    showThumb: true,
    loaded: 80,
    duration: 4000,
  },
  playbackSpeedProps: {
    value: 1,
  },
};
