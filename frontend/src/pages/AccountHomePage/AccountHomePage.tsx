import {
  Button,
  MaturityRating,
  ShowDetailsDialog,
  type Episode,
  type MovieCardData,
} from '../../components';
import Logo from '../../assets/icons/netflix-logo.svg?react';
import Replay from '../../assets/icons/replay-icon.svg?react';
import heroUrl from '../../assets/images/hero-2.jpg';

import styles from './AccountHomePage.module.css';
import { ShowsCarousel } from '../../components/ShowsCarousel';
import { mockShows } from '../../mock/mockShows';
import { useEffect, useRef, useState } from 'react';
import { useConfig } from '../../hooks';

interface Title {
  id: number;
  name: string;
  type: 'MOVIE' | 'SERIES';
  season: [
    {
      id: number;
      number: number;
      thumbnail: string;
      video: [
        {
          id: number;
          name?: string;
          image?: string | null;
          duration: number;
          url: string;
          episode_number?: number;
        },
      ];
    },
  ];
  video: {
    id: number;
    name?: string;
    image?: string | null;
    duration: number;
    url: string;
    episode_number?: number;
  };
}

const AccountHomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);
  const { config, loadingConfig } = useConfig();
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState<Title>();
  const [titles, setTitles] = useState<Title[]>();
  const [episodeList, setEpisodeList] = useState<Episode[] | undefined>(undefined);

  let movieCardData: MovieCardData[] = [];

  if (titles && titles.length > 0) {
    movieCardData = titles.map((title) => {
      return {
        id: title.id,
        thumbnail: title.type === 'MOVIE' ? title.video.image : title.season[0].thumbnail,
        duration: title.type === 'MOVIE' ? formatDuration(title.video.duration) : undefined,
        isNew: undefined,
        progress: undefined,
        rank: undefined,
        seasonInfo: undefined,
        title: title.name,
      } as unknown as MovieCardData;
    });
  }

  function formatDuration(duration: number | undefined) {
    if (!duration) return undefined;
    if (duration >= 3600) return new Date(duration * 1000).toISOString().slice(11, 19);
    else return new Date(duration * 1000).toISOString().slice(14, 19);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateLeftOffset = () => {
      const leftOffset = el.getBoundingClientRect().left;
      setLeftOffset(leftOffset);
    };

    updateLeftOffset();

    window.addEventListener('resize', updateLeftOffset);
    return () => window.removeEventListener('resize', updateLeftOffset);
  }, []);

  useEffect(() => {
    const fetchTitles = async () => {
      if (loadingConfig) return;
      try {
        const response = await fetch(`${config?.apiUrl}/titles/`);
        const data = await response.json();

        if (data.error) {
          return console.error(data.error);
        }

        if (data.titles) {
          setTitles(data.titles);
        } else {
          console.error('No Title data.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTitles();
  }, [config?.apiUrl, loadingConfig]);

  const handleCardClick = (id: number) => {
    const fetchTitle = async () => {
      if (loadingConfig) return;
      try {
        const response = await fetch(`${config?.apiUrl}/titles/${id}`);
        const data = await response.json();
        if (data.error) {
          return console.error(data.error);
        }

        if (data.title) {
          setTitle(data.title);
        } else {
          console.error('No title data.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTitle();
    setOpenDialog(true);
  };

  useEffect(() => {
    if (title && title.type === 'SERIES') {
      setEpisodeList(
        title.season.flatMap((s) =>
          s.video.map((v) => ({
            id: v.id,
            title: v.name ?? '',
            description: '',
            duration: String(v.duration),
            thumbnail: v.image ?? '',
            number: v.episode_number ?? 0,
          }))
        )
      );
    } else setEpisodeList(undefined);
  }, [title]);

  return (
    <>
      <section
        className={styles.intro}
        style={{
          backgroundImage: `url(${heroUrl})`,
        }}
      >
        <div ref={ref} className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.mainText}>
              <div className={styles.logoWrapper}>
                <Logo />
                <p>Series</p>
              </div>
              <h1 className={styles.mainHeader}>
                House
                <br />
                of
                <br />
                ninjas
              </h1>
            </div>
            <p>
              Years after retiring from their formidable ninja lives, a dysfunctional family must
              return to shadowy missions to counteract a string of looming threats.
            </p>
            <div className={styles.buttonsWrapper}>
              <Button children="Play" variant="white" icon="playBlack" iconPosition="before" />
              <Button children="More Info" variant="secondary" icon="info" iconPosition="before" />
            </div>
          </div>
        </div>
        <div className={styles.ratingWrapper}>
          <a href="#" className={styles.replay}>
            <Replay />
          </a>
          <div className={styles.rating}>
            <MaturityRating rating="TV-14" />
          </div>
        </div>
      </section>
      <section className={styles.carousels}>
        <div style={{ paddingLeft: `${leftOffset}px` }} className={styles.wrapCarousel}>
          {title && (
            <ShowDetailsDialog
              videoUrl={title.type === 'MOVIE' ? title.video.url : title.season[0].video[0].url}
              description=""
              title={title.name}
              isOpen={openDialog}
              onClose={() => setOpenDialog(false)}
              episodes={episodeList}
            />
          )}
          {titles &&
            titles.length > 0 &&
            mockShows.map((category, id) => (
              <ShowsCarousel
                key={id}
                title={category.title}
                images={category.images}
                movieCard={{
                  cards: [...movieCardData],
                  variant: 'default',
                  onCardClick: (id) => handleCardClick(id),
                }}
                className={styles.carousel}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default AccountHomePage;
