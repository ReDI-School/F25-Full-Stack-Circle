import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { VideoDetails } from './ActivePlayer.types';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import styles from './ActivePlayer.module.css';

const ActivePlayer = () => {
  //useParams to extract the video id from the route
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<VideoDetails | null>(null);
  const [loading, setLoading] = useState(true);

  // useEffect fetches the video data from an external API depending on the URL type.
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`/endpoint/for/videos/${id}`);
        if (!response.ok) throw new Error('Failed to fetch video details');
        const data: VideoDetails = await response.json();
        setVideo(data);
      } catch (error) {
        console.error(error);
        setVideo(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVideo();
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={`${styles.square} ${styles.square1}`}></div>
        <div className={`${styles.square} ${styles.square2}`}></div>
        <div className={`${styles.square} ${styles.square3}`}></div>
      </div>
    );
  }
  if (!video) return <div className={styles.text}>Video not found</div>;

  return (
    <div className={styles.playerContainer}>
      <VideoPlayer src={video.url} playing={true} fullscreen={true} size="full" />{' '}
      {video.title && <div className={styles.videoTitle}>{video.title}</div>}
    </div>
  );
};

export default ActivePlayer;
