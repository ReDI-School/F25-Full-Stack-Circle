import { useEffect, useRef } from 'react';
import type { VideoProps } from './Video.types';
import YouTubePlayer from 'yt-player';

const Video = ({ videoId, width = 640, height = 360, onPlay, onPause, className }: VideoProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let yt: any;

    (async () => {
      if (!containerRef.current) return;

      yt = new YouTubePlayer(containerRef.current, {
        width,
        height,
        autoplay: false,
        controls: true,
      });

      playerRef.current = yt;

      yt.on('playing', () => onPlay?.());
      yt.on('paused', () => onPause?.());

      if (videoId) yt.load(videoId);
    })();

    return () => {
      yt?.destroy();
    };
  }, [videoId, width, height, onPlay, onPause]);

  return <div ref={containerRef} />;
};

export default Video;
