import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useConfig } from '../../hooks';
import { VideoPlayerWrapper } from '../../components/VideoPlayerWrapper';
import type { VideoData } from '../../api/video/videoApi.types';
import styles from './ActivePlayer.module.css';

const ActivePlayer = () => {
  const [video, setVideo] = useState<VideoData>();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const { id } = useParams();
  const { config, loadingConfig } = useConfig();

  useEffect(() => {
    const fetchVideo = async () => {
      if (loadingConfig) return;
      if (!id) return;
      try {
        const response = await fetch(`${config?.apiUrl}/videos/${Number(id)}`);
        const data = await response.json();

        if (data.error) {
          return setErrorMessage(data.error);
        }

        if (data.video) {
          setVideo(data.video);
          setErrorMessage(null);
        } else {
          setErrorMessage('No Video data.');
        }
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      }
    };

    fetchVideo();
  }, [id, config?.apiUrl, loadingConfig]);

  if (loadingConfig) return <p className={styles.message}>Loading Video ...</p>;

  if (errorMessage) return <p className={styles.message}>{errorMessage}</p>;

  if (!video) return;
  return <VideoPlayerWrapper volume={1} src={video.url} title={video.title.name} size="full" playing />;
};

export default ActivePlayer;
