import type { ReactPlayerProps } from 'react-player/types';
import type { VideoProps } from './Video.types';
import ReactPlayer from 'react-player';
import type { RefAttributes } from 'react';

const Video = ({
  src,
  playing,
  light,
  playIcon,
  width = 640,
  height = 360,
  onPlay,
  onPause,
  volume,
  className,
}: VideoProps) => {
  return (
    <ReactPlayer
      src={src}
      playing={playing}
      width={width}
      height={height}
      volume={volume}
      light={light}
      playIcon={playIcon}
      config={{
        youtube: {
          rel: 0,
        },
        vimeo: {
          controls: true
        }
      }}
    />
  );
};

export default Video;
