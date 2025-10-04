import { useRef, useState } from 'react';
import type { VideoProps } from './Video.types';
import ReactPlayer from 'react-player';

const Video = ({
  src,
  playing,
  light,
  playIcon,
  width = '320px',
  height = '180px',
  volume,
  currentTime = 0,
}: VideoProps) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [lightState, setLightState] = useState<string | boolean | undefined>(light);
  const [currentTimeState, setCurrentTimeState] = useState<number>(currentTime);

  const handleOnClickPreview = () => {
    setLightState(false);
  };

  const handleOnLoadStart = () => {};

  const handleOnReady = () => {
    // // Temporary
    if (playerRef.current) {
      playerRef.current.currentTime = currentTime;
    }
  };

  const handleOnStart = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log('onStart', e);
  };

  const handleOnPlay = () => {
    console.log('OnPlay');
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
    setLightState(light);
  };

  const handleOnError = () => {
    console.log('onError');
  };

  const handleOnTimeUpdate = () => {
    if (playerRef.current) setCurrentTimeState(playerRef.current?.currentTime);
  };

  const handleOnProgress = () => {
    console.log('onProgress');
  };

  const handleOnDurationChange = () => {
    console.log('onDurationChange');
  };

  return (
    <div style={{ display: 'inline-block', width, height }}>
      <ReactPlayer
        ref={playerRef}
        style={{ aspectRatio: '16/9' }}
        width={width}
        height={height}
        src={src}
        playing={playing}
        light={lightState}
        playIcon={playIcon}
        volume={volume}
        playbackRate={1}
        config={{
          vimeo: {
            byline: false,
            portrait: false,
          },
        }}
        onClickPreview={handleOnClickPreview}
        onLoadStart={handleOnLoadStart}
        onReady={handleOnReady}
        onStart={(e) => handleOnStart(e)}
        onPlay={handleOnPlay}
        onPause={handleOnPause}
        onRateChange={handleOnRateChange}
        onSeeking={handleOnSeeking}
        onSeeked={handleOnSeeked}
        onEnded={handleOnEnded}
        onError={handleOnError}
        onTimeUpdate={handleOnTimeUpdate}
        onProgress={handleOnProgress}
        onDurationChange={handleOnDurationChange}
      />
      <input
        value={currentTimeState}
        onChange={(e) => {
          setCurrentTimeState(Number(e.currentTarget.value));
        }}
        type="number"
      />
    </div>
  );
};

export default Video;
