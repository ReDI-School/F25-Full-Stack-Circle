import Logo from '../../assets/icons/netflix-logo.svg?react';
import Replay from '../../assets/icons/replay-icon.svg?react';
import {
  Button,
  MaturityRating,
  Modal,
  ShowDetailsDialog,
  type Episode,
  type MovieCardData,
} from '../../components';

import { useEffect, useRef, useState } from 'react';
import type { Title } from '../../api/title/titleApi.types';
import { ShowsCarousel } from '../../components/ShowsCarousel';
import { useConfig, useStateToggleHandlers } from '../../hooks';
import { mockData, type MockData } from '../../mock/mockData';
import { mockShows } from '../../mock/mockShows';
import Profiles from '../Profiles/Profiles';

import styles from './Home.module.css';

const PROFILES_MODAL_KEY = 'isProfilesModalShown';

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { config, loadingConfig } = useConfig();
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState<Title>();
  const [selectedMockShow, setSelectedMockShow] = useState<MockData>();
  const [titles, setTitles] = useState<Title[]>();
  const [episodeList, setEpisodeList] = useState<Episode[] | undefined>(undefined);
  const [useMockData, setUseMockData] = useState(false);
  const [isModalOpen, openModal, closeModal] = useStateToggleHandlers(false);

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
  } else if (useMockData) {
    // Use mockData when API returns no data
    movieCardData = mockData.map((mock) => {
      let duration: string | undefined = undefined;
      if (mock.details?.duration) {
        if (typeof mock.details.duration === 'number') {
          duration = formatDuration(mock.details.duration);
        } else {
          duration = mock.details.duration;
        }
      }

      return {
        id: mock.id,
        thumbnail: mock.thumbnail,
        duration: duration,
        isNew: mock.isNew,
        progress: undefined,
        rank: mock.rank,
        seasonInfo: undefined,
        title: mock.title,
      } as MovieCardData;
    });
  }

  function formatDuration(duration: number | undefined) {
    if (!duration) return undefined;
    if (duration >= 3600000) return new Date(duration).toISOString().slice(11, 19);
    else return new Date(duration).toISOString().slice(14, 19);
  }

  useEffect(() => {
    const fetchTitles = async () => {
      if (loadingConfig) return;
      try {
        const response = await fetch(`${config?.apiUrl}/titles/`);
        const data = await response.json();

        if (data.error) {
          console.error(data.error);
          setUseMockData(true);
          return;
        }

        if (data.titles && data.titles.length > 0) {
          setTitles(data.titles);
          setUseMockData(false);
        } else {
          console.error('No Title data. Using mock data.');
          setUseMockData(true);
        }
      } catch (error) {
        console.error(error, 'Using mock data.');
        setUseMockData(true);
      }
    };

    fetchTitles();
  }, [config?.apiUrl, loadingConfig]);

  const handleCardClick = (id: number) => {
    if (useMockData) {
      // Use mockData
      const show = mockData.find((item) => item.id === id);
      if (show) {
        setSelectedMockShow(show);
        setTitle(undefined);
        setOpenDialog(true);
      }
    } else {
      // Fetch from API
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
            setSelectedMockShow(undefined);
          } else {
            console.error('No title data.');
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchTitle();
      setOpenDialog(true);
    }
  };

  useEffect(() => {
    if (title?.type === 'SERIES') {
      setEpisodeList(
        title.season.flatMap((s) =>
          s.video.map((v) => ({
            id: v.id,
            url: v.url,
            title: v.name ?? '',
            description: '',
            duration: v.duration,
            thumbnail: v.image ?? '',
            number: v.episode_number ?? 0,
          }))
        )
      );
    } else if (selectedMockShow?.type === 'SERIES' && selectedMockShow.details?.episodes) {
      setEpisodeList(selectedMockShow.details.episodes);
    } else {
      setEpisodeList(undefined);
    }
  }, [title, selectedMockShow]);

  useEffect(() => {
    const wasShownPreviously = sessionStorage.getItem(PROFILES_MODAL_KEY);
    if (!wasShownPreviously) {
      openModal();
      sessionStorage.setItem(PROFILES_MODAL_KEY, 'true');
    }
  }, [openModal]);

  let videoUrl = '';
  if (title) {
    if (title.type === 'MOVIE') {
      videoUrl = title.video.url;
    } else {
      videoUrl = title.season[0]?.video[0]?.url ?? '';
    }
  } else if (selectedMockShow?.details?.videoUrl) {
    videoUrl = selectedMockShow.details.videoUrl;
  }

  const dialogTitle = title ? title.name : (selectedMockShow?.title ?? '');
  const dialogDescription = title ? title.synopsis : (selectedMockShow?.details?.description ?? '');

  return (
    <>
      <section className={styles.intro}>
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
              <Button variant="white" icon="playBlack" iconPosition="before">
                Play
              </Button>
              <Button variant="secondary" icon="info" iconPosition="before">
                More Info
              </Button>
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
        <div className={styles.wrapCarousel}>
          <ShowDetailsDialog
            videoUrl={videoUrl}
            description={dialogDescription}
            title={dialogTitle}
            isOpen={openDialog}
            onClose={() => {
              setOpenDialog(false);
              setTitle(undefined);
              setSelectedMockShow(undefined);
            }}
            episodes={episodeList}
          />
          {movieCardData.length > 0 &&
            mockShows.map((category, index) => {
              // Filter cards based on category IDs, maintaining the order from mockShows
              const filteredCards = category.ids
                ? category.ids
                    .map((id) => movieCardData.find((card) => card.id === id))
                    .filter((card): card is MovieCardData => card !== undefined)
                : movieCardData;

              // Only render carousel if it has cards
              if (filteredCards.length === 0) return null;

              return (
                <ShowsCarousel
                  key={`${category.title}-${index}`}
                  title={category.title}
                  movieCard={{
                    cards: filteredCards,
                    variant: category.title === 'Top 10' ? 'top10' : 'default', // 5 because we don't have icons for ranks 7+
                    onCardClick: (id) => handleCardClick(id),
                  }}
                  className={styles.carousel}
                />
              );
            })}
        </div>
      </section>
      <Modal isOpen={isModalOpen}>
        <Profiles onProfileClick={closeModal} />
      </Modal>
    </>
  );
};

export default Home;
