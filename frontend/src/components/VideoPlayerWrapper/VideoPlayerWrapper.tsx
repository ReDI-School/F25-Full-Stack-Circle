import { useEffect, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import styles from './VideoPlayerWrapper.module.css';
import { Video } from '../VideoPlayer/index';
import { VideoControlBar } from '../VideoControlBar/index';
import type { VideoPlayerWrapperProps } from './VideoPlayerWrapper.types';

const styledWrapper = cva(styles.videoPlayerWrapper, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
      full: styles.full,
    },
    showMouseInFullscreen: {
      false: styles.hideMouse,
    },
  },
});

const VideoPlayerWrapper = ({
  src,
  title = '',
  playing,
  light,
  playIcon,
  width = '100%',
  height = '100%',
  volume = 0,
  playbackRate,
  currentTime = 0,
  size = 'medium',
  fullscreen = false,
  episodes,
  onEpisodeClick,
  currentEpisodeId,
}: VideoPlayerWrapperProps) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const initialState = {
    playing: playing,
    currentTime: currentTime,
    loaded: 0,
    duration: 0,
    start: false,
    volume,
    fullscreen: fullscreen,
    showControls: false,
    light: light,
    playbackSpeed: playbackRate,
  };

  const [state, setState] = useState(initialState);

  const handleOnClickPreview = () => {
    setState((prev) => ({ ...prev, light: false, playing: true }));
  };

  const handleOnStart = () => {
    setState((prev) => ({ ...prev, start: true }));
  };

  const handleOnPlay = () => {};

  const handleOnPlaying = () => {};

  const handleOnReady = () => {
    if (playerRef.current) {
      playerRef.current.currentTime = state.currentTime;
    }
  };

  const handleOnPause = () => {};

  const handleOnRateChange = () => {};

  const handleOnSeeking = () => {};

  const handleOnSeeked = () => {};

  const handleOnEnded = () => {
    const player = playerRef.current;

    setState((prev) => {
      if (player) {
        if (document.fullscreenElement != null) document.exitFullscreen();
        return { ...initialState, duration: player.duration, playing: false };
      } else return { ...prev };
    });
  };

  const handleOnError = () => {};

  const handleOnTimeUpdate = () => {
    const player = playerRef.current;

    setState((prev) => {
      if (player) {
        return { ...prev, currentTime: player.currentTime };
      } else {
        return { ...prev };
      }
    });
  };

  const handleOnProgress = () => {
    const player = playerRef.current;

    setState((prev) => {
      if (player) {
        return { ...prev, loaded: player.buffered.end(player.buffered.length - 1) };
      } else {
        return { ...prev };
      }
    });
  };

  const handleOnDurationChange = () => {
    const player = playerRef.current;

    setState((prev) => {
      if (player) {
        return { ...prev, duration: player.duration };
      } else {
        return { ...prev };
      }
    });
  };

  const handleClickPlay = () => {
    setState((prev) => ({ ...prev, playing: !prev.playing }));
  };

  const handleClickRewind = () => {
    const player = playerRef.current;
    setState((prev) => {
      const newTime = Math.max(0, prev.currentTime - 10);
      if (player) player.currentTime = newTime;
      return { ...prev, currentTime: newTime };
    });
  };

  const handleClickForward = () => {
    const player = playerRef.current;
    setState((prev) => {
      const newTime = Math.min(prev.duration, prev.currentTime + 10);
      if (player) player.currentTime = newTime;
      return { ...prev, currentTime: newTime };
    });
  };

  const handleVolumeChange = (value: number) => {
    setState((prev) => ({ ...prev, volume: value }));
  };

  const handlePlaybackSpeedChange = (value: number) => {
    setState((prev) => ({ ...prev, playbackSpeed: value }));
  };

  const handleSetNewValue = (newValue: number) => {
    const player = playerRef.current;

    setState((prev) => {
      if (player) {
        player.currentTime = newValue;
        return { ...prev, currentTime: newValue };
      } else {
        return { ...prev };
      }
    });
  };

  const handleClickFullscreen = () => {
    const wrapper = wrapperRef.current;
    if (state.fullscreen) {
      document.exitFullscreen();
    } else {
      if (wrapper) wrapper.requestFullscreen();
    }
  };

  useEffect(() => {
    const handleWrapperOnFullscreenChange = () => {
      const wrapper = wrapperRef.current;

      if (document.fullscreenElement === null) {
        setState((prev) => ({ ...prev, fullscreen: false, showControls: true }));
      } else if (document.fullscreenElement === wrapper) {
        setState((prev) => ({ ...prev, fullscreen: true, showControls: true }));
      }
    };

    document.addEventListener('fullscreenchange', handleWrapperOnFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleWrapperOnFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let timeout: ReturnType<typeof setTimeout>;

    if (!wrapper) return;
    // if (!wrapper || !state.fullscreen) return; Use this to hide/show controlBar only in fullscreen
    const handleWrapperOnMouseMove = () => {
      clearTimeout(timeout);
      setState((prev) => ({ ...prev, showControls: true }));

      timeout = setTimeout(() => {
        setState((prev) => ({ ...prev, showControls: false }));
      }, 3000);
    };

    wrapper.addEventListener('mousemove', handleWrapperOnMouseMove);

    return () => {
      wrapper.removeEventListener('mousemove', handleWrapperOnMouseMove);

      clearTimeout(timeout);
    };
  }, [state.showControls]);
  // }, [state.fullscreen, state.showControls]); Use this to hide/show controlBar only in fullscreen

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (state.light) {
      return;
    }

    const target = e.target as HTMLElement;
    const controlBar = target.closest('[class*="videoControl"]');
    
    if (controlBar) {
      return;
    }
    
    handleClickPlay();
  };

  return (
    <div
      ref={wrapperRef}
      className={styledWrapper({ size, showMouseInFullscreen: state.showControls })}
    >
      <Video
        playerRef={playerRef}
        width={width}
        height={height}
        src={src}
        playing={state.playing}
        light={state.light}
        playIcon={playIcon}
        volume={state.volume}
        playbackRate={state.playbackSpeed}
        // Called when user clicks the light mode preview
        onClickPreview={handleOnClickPreview}
        // Called when media is loaded and ready to play.
        onReady={handleOnReady}
        // Called when media starts playing
        onStart={handleOnStart}
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

      {!state.light && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            cursor: 'pointer',
          }}
          onClick={handleVideoClick}
        />
      )}

      {!state.light && state.showControls && (
        <VideoControlBar
          isPlaying={state.playing}
          onPlayButtonClick={handleClickPlay}
          onCaptionButtonClick={() => {}}
          onEpisodeListButtonClick={() => {}}
          onRewindButtonClick={handleClickRewind}
          onForwardButtonClick={handleClickForward}
          onFullscreenButtonClick={handleClickFullscreen}
          onNextButtonClick={() => {}}
          onPlaybackButtonClick={() => {}}
          episodes={episodes}
          onEpisodeClick={onEpisodeClick}
          currentEpisodeId={currentEpisodeId}
          progressBarProps={{
            value: state.currentTime,
            loaded: state.loaded,
            duration: state.duration,
            setNewValue: (newValue: number) => handleSetNewValue(newValue),
            showThumb: true,
            color: 'red',
          }}
          title={title}
          volumeSliderProps={{
            value: state.volume,
            onChange: (value: number) => handleVolumeChange(value),
          }}
          playbackSpeedProps={{
            value: state.playbackSpeed,
            onChange: (value: number) => handlePlaybackSpeedChange(value),
          }}
        />
      )}
    </div>
  );
};

export default VideoPlayerWrapper;
