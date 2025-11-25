import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { VideoPlayerWrapper } from '../../components/VideoPlayerWrapper';

// mock data
const videos: VideoType[] = [
  {
    id: 1,
    src: 'https://vimeo.com/1124449787',
    title: 'Robots',
  },
  {
    id: 2,
    src: 'https://vimeo.com/524933864',
    title: 'Vimeo Ad',
  },
];

type VideoType = {
  id: number;
  src: string;
  title: string;
};

const ActivePlayer = () => {
  const [video, setVideo] = useState<VideoType>();
  const { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      // mock fetching of data
      const video = videos.find((video) => video.id === Number(id));
      if (video) setVideo(video);
    };

    fetchVideo();
  }, [id]);

  if (!video) return <VideoPlayerWrapper src={''} title={''} size="full" playing />;

  return <VideoPlayerWrapper src={video.src} title={video.title} size="full" playing />;
};

export default ActivePlayer;
