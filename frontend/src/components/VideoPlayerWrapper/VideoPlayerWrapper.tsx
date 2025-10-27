import { useEffect, useRef, useState } from 'react';
import type { VideoPlayerWrapperProps } from './VideoPlayerWrapper.types';
import ReactPlayer from 'react-player';
import { cva } from 'class-variance-authority';
import styles from './VideoPlayerWithControls.module.css';
import { VideoControlBar } from '../VideoControlBar';
import { ProgressBar } from '../ProgressBar';
import PlayIcon from '../../assets/icons/playIcon.svg?react';
// import MuteVolume from '../../assets/icons/muteVolume.svg?react';
// import MiddleVolume from '../../assets/icons/middleVolume.svg?react';
import HighVolume from '../../assets/icons/highVolume.svg?react';
import PlayBack from '../../assets/icons/playback.svg?react';
import Next from '../../assets/icons/next.svg?react';
import Rewind from '../../assets/icons/rewind.svg?react';
import Fullscreen from '../../assets/icons/fullscreen.svg?react';
import Forward from '../../assets/icons/forward.svg?react';
import EpisodeList from '../../assets/icons/episodeList.svg?react';
import Caption from '../../assets/icons/caption.svg?react';
import Video from '../VideoPlayer/VideoPlayer';

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
}: VideoPlayerWrapperProps) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const initialState = {
    playing: playing,
    currentTime: currentTime,
    loaded: 0,
    duration: 0,
    start: false,
    fullscreen: fullscreen,
    showControls: true,
    light: light,
  };

  const [state, setState] = useState(initialState);

  const handleOnClickPreview = () => {
    setState((prev) => ({ ...prev, light: false, playing: true }));
  };

  const handleOnStart = () => {
    console.log('OnStart');
    setState((prev) => ({ ...prev, start: true }));
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
      playerRef.current.currentTime = state.currentTime;
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
    const player = playerRef.current;

    setState((prev) => {
      if (player) {
        if (document.fullscreenElement != null) document.exitFullscreen();
        return { ...initialState, duration: player.duration, playing: false };
      } else return { ...prev };
    });
  };

  const handleOnError = () => {
    console.log('onError');
  };

  const handleOnTimeUpdate = () => {
    console.log('OnTimeUpdate');
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
    console.log('OnHandleProgress');
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
    console.log('OnDurationChange');
    const player = playerRef.current;

    setState((prev) => {
      if (player) {
        return { ...prev, duration: player.duration };
      } else {
        return { ...prev };
      }
    });
  };

  const handleOnClickPlay = () => {
    setState((prev) => ({ ...prev, playing: !prev.playing }));
  };

  const handleOnClickRewind = () => {
    const player = playerRef.current;
    setState((prev) => {
      const newTime = Math.max(0, prev.currentTime - 10);
      if (player) player.currentTime = newTime;
      return { ...prev, currentTime: newTime };
    });
  };

  const handleOnClickForward = () => {
    const player = playerRef.current;
    setState((prev) => {
      const newTime = Math.min(prev.duration, prev.currentTime + 10);
      if (player) player.currentTime = newTime;
      return { ...prev, currentTime: newTime };
    });
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

  const handleOnClickFullscreen = () => {
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

    if (!wrapper || !state.fullscreen) return;

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
  }, [state.fullscreen, state.showControls]);

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
        volume={volume}
        playbackRate={playbackRate}
        
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
        onDurationChange={handleOnDurationChange} />

      <ReactPlayer
        
      />
      {!state.light && state.showControls && (
        <VideoControlBar>
          <div style={{ backgroundColor: 'transparent', height: 1 }} />
          <ProgressBar
            value={state.currentTime}
            loaded={state.loaded}
            duration={state.duration}
            setNewValue={(newValue: number) => handleSetNewValue(newValue)}
            showThumb
            color="red"
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <PlayIcon width={20} height={20} onClick={handleOnClickPlay} />
            <Rewind width={20} height={20} onClick={handleOnClickRewind} />
            <Forward width={20} height={20} onClick={handleOnClickForward} />
            <HighVolume width={20} height={20} />
            <p>Title Placeholder S1:Ep1 Episode Title</p>
            <Next width={20} height={20} />
            <EpisodeList width={20} height={20} />
            <Caption width={20} height={20} />
            <PlayBack width={20} height={20} />
            <Fullscreen width={20} height={20} onClick={handleOnClickFullscreen} />
          </div>
        </VideoControlBar>
      )}
    </div>
  );
};

export default VideoPlayerWrapper;
