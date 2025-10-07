import { useRef, useState } from 'react';
import type { VideoPlayerProps } from './VideoPlayer.types';
import ReactPlayer from 'react-player';
import { cva } from 'class-variance-authority';
import styles from './VideoPlayer.module.css';
import { VideoControlBar } from '../VideoControlBar';
import { ProgressBar } from '../ProgressBar';

const styledWrapper = cva(styles.videoPlayerWrapper, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
      full: styles.full,
    },
  },
});

const Video = ({
  src,
  playing,
  light,
  playIcon,
  width = '100%',
  height = '100%',
  volume,
  playbackRate,
  currentTime = 0,
  size = 'medium',
  fullscreen = false,
}: VideoPlayerProps) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  const initialState = {
    light: light,
    currentTime: currentTime,
    duration: 0,
    loaded: 0,
    // will add more states here
  };

  const [state, setState] = useState(initialState);

  const initializeStates = () => {
    setState(initialState);
  };

  const handleOnClickPreview = () => {
    setState((prev) => ({ ...prev, light: false }));
  };

  const handleOnStart = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log('onStart', e);
    if (playerRef.current && fullscreen) {
      playerRef.current
        .requestFullscreen()
        .then()
        .catch((e) => console.log(e));
    }
  };

  const handleOnPlay = () => {
    console.log('OnPlay');
  };

  const handleOnPlaying = () => {
    console.log('OnPlaying');
  };

  const handleOnReady = () => {
    console.log('OnReady');
    if (playerRef.current) {
      playerRef.current.currentTime = currentTime;
    }
  };

  const handleOnPause = () => {
    console.log('OnPause');
  };

  const handleOnRateChange = () => {
    console.log('onRateChange');
  };

  const handleOnSeeking = () => {
    console.log('onSeeking');
  };

  const handleOnSeeked = () => {
    console.log('onSeeked');
  };

  const handleOnEnded = () => {
    console.log('onEnded');
    initializeStates();
  };

  const handleOnError = () => {
    console.log('onError');
  };

  const handleOnTimeUpdate = () => {
    setState((prev) => {
      if (playerRef.current) return { ...prev, currentTime: playerRef.current.currentTime };
      else return { ...prev };
    });
  };

  const handleOnProgress = () => {
    console.log('onProgress');
    setState((prev) => {
      if (playerRef.current)
        return {
          ...prev,
          loaded: playerRef.current.buffered.end(playerRef.current.buffered.length - 1),
        };
      else return { ...prev };
    });
  };

  const handleOnDurationChange = () => {
    console.log('onDurationChange');
    setState((prev) => {
      if (playerRef.current) return { ...prev, duration: playerRef.current.duration };
      else return { ...prev, duration: prev.duration };
    });
  };

  const handleProgressBarOnchange = (value: number) => {
    setState((prev) => ({ ...prev, currentTime: value }));
    if (playerRef.current) playerRef.current.currentTime = value;
  };

  const handleInputOnchange = (value: number) => {
    setState((prev) => ({ ...prev, currentTime: value }));
    if (playerRef.current) playerRef.current.currentTime = value;
  };

  return (
    <div className={styledWrapper({ size })}>
      <ReactPlayer
        ref={playerRef}
        style={{ aspectRatio: '16/9' }}
        width={width}
        height={height}
        src={src}
        playing={playing}
        light={state.light}
        playIcon={playIcon}
        volume={volume}
        playbackRate={playbackRate}
        config={{
          vimeo: {
            byline: false,
            portrait: false,
          },
        }}
        // Called when user clicks the light mode preview
        onClickPreview={handleOnClickPreview}
        // Called when media is loaded and ready to play.
        onReady={handleOnReady}
        // Called when media starts playing
        onStart={(e) => handleOnStart(e)}
        // Called when the playing prop is set to true
        onPlay={handleOnPlay}
        // Called when media actually starts playing
        onPlaying={handleOnPlaying}
        // Called when media is paused
        onPause={handleOnPause}
        // Called when playback rate of the player changed
        onRateChange={handleOnRateChange}
        // Called when media is seeking
        onSeeking={handleOnSeeking}
        // Called when media has finished seeking
        onSeeked={handleOnSeeked}
        // Called when media finishes playing
        onEnded={handleOnEnded}
        // Called when an error occurs whilst attempting to play media
        onError={handleOnError}
        // Called when the media's current time changes
        onTimeUpdate={handleOnTimeUpdate}
        // Called when media data is loaded
        onProgress={handleOnProgress}
        // Callback containing duration of the media, in seconds
        onDurationChange={handleOnDurationChange}
      />
      <VideoControlBar>
        <ProgressBar
          showThumb
          value={state.currentTime}
          currentLabel={Math.round(state.currentTime).toString()}
          loaded={state.loaded}
          maxLabel={state.duration.toString()}
          color="red"
          onChange={handleProgressBarOnchange}
        />

        <input
          type="range"
          min={0}
          max={state.duration}
          value={state.currentTime}
          onChange={(e) => handleInputOnchange(Number(e.currentTarget.value))}
        />
      </VideoControlBar>
    </div>
  );
};

export default Video;
