import type { VideoPlayerProps } from './VideoPlayer.types';
import ReactPlayer from 'react-player';

const Video = ({
  src,
  playerRef,
  playing,
  loop,
  light,
  playIcon,
  width = '100%',
  height = '100%',
  volume,
  playbackRate,
  onClickPreview,
  onReady,
  onStart,
  onPlay,
  onPlaying,
  onPause,
  onRateChange,
  onSeeking,
  onSeeked,
  onEnded,
  onError,
  onTimeUpdate,
  onProgress,
  onDurationChange,
  onClick,
}: VideoPlayerProps) => {
  return (
    <div onClick={onClick} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactPlayer
        ref={playerRef}
        style={{ aspectRatio: '16/9' }}
        width={width}
        height={height}
        src={src}
        playing={playing}
        loop={loop}
        light={light}
        playIcon={playIcon}
        volume={volume}
        playbackRate={playbackRate}
        preload="auto"
        controls={false}
        config={{
          vimeo: {
            byline: false,
            portrait: false,
            controls: false,
          },
        }}
        // Called when user clicks the light mode preview
        onClickPreview={onClickPreview}
        // Called when media is loaded and ready to play.
        onReady={onReady}
        // Called when media starts playing
        onStart={onStart}
        // Called when the playing prop is set to true
        onPlay={onPlay}
        // Called when media actually starts playing
        onPlaying={onPlaying}
        // Called when media is paused
        onPause={onPause}
        // Called when playback rate of the player changed
        onRateChange={onRateChange}
        // Called when media is seeking
        onSeeking={onSeeking}
        // Called when media has finished seeking
        onSeeked={onSeeked}
        // Called when media finishes playing
        onEnded={onEnded}
        // Called when an error occurs whilst attempting to play media
        onError={onError}
        // Called when the media's current time changes
        onTimeUpdate={onTimeUpdate}
        // Called when media data is loaded
        onProgress={onProgress}
        // Callback containing duration of the media, in seconds
        onDurationChange={onDurationChange}
      />
    </div>
  );
};

export default Video;
