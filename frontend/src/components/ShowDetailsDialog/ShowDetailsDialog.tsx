import { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import { Video } from '../VideoPlayer';
import { EpisodeList } from '../EpisodeList';
import { VideoDialog } from '../VideoDialog';
import type { ShowDetailsDialogProps } from './ShowDetailsDialog.types';
import styles from './ShowDetailsDialog.module.css';
import PlayIcon from '../../assets/icons/playIconBlack.svg?react';
import PlusIcon from '../../assets/icons/plus.svg?react';
import ThumbsUpIcon from '../../assets/icons/thumbs-up.svg?react';
import CloseIcon from '../../assets/icons/crossIcon.svg?react';
import MuteIcon from '../../assets/icons/mute.svg?react';
import NetflixLogo from '../../assets/icons/netflix-logo.svg?react';

const defaultProps = {
  backgroundImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=80',
  isNew: true,
  seasons: 3,
  year: 2024,
  isHD: true,
  hasAudioDescription: true,
  maturityRating: 'TV-MA',
  contentWarnings: 'smoking, violence',
  popularityRank: '#2 in TV Shows Today',
  isTop10: true,
  cast: ['Kento Kaku', 'Yosuke Eguchi', 'Tae Kimura', 'more'],
  genres: ['TV Dramas', 'Japanese', 'TV Thrillers'],
  mood: 'Dark, Suspenseful, Exciting',
  currentEpisodeId: 1,
  onMyList: () => console.log('My List clicked'),
  onRate: () => console.log('Rate clicked'),
  onEpisodeClick: (episode: {
    id: string | number;
    number: number;
    thumbnail: string;
    title: string;
    description?: string;
    duration?: string;
  }) => console.log('Episode clicked:', episode),
};

const ShowDetailsDialog = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
  episodes,
}: ShowDetailsDialogProps) => {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const synopsis = description;
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const formatArray = (value: string | string[] | undefined): string => {
    if (!value) return '';
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value;
  };

  const heroStyle = !videoUrl && defaultProps.backgroundImage
    ? {
        backgroundImage: `url(${defaultProps.backgroundImage})`,
      }
    : !videoUrl
    ? {
        backgroundColor: 'var(--bg-secondary)',
      }
    : {};

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.dialog}
      overlayClassName={styles.overlay}
      role="dialog"
      ariaHideApp={false}
      shouldReturnFocusAfterClose
      shouldFocusAfterRender
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <div className={styles.heroSection} style={heroStyle}>
        {videoUrl && (
          <div className={styles.videoBackground}>
            <Video
              playerRef={videoPlayerRef}
              src={videoUrl}
              playing={isOpen}
              volume={0}
              width="100%"
              height="100%"
              loop
            />
          </div>
        )}

        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close dialog"
          type="button"
        >
          <CloseIcon className={styles.closeIcon} />
        </button>

        <div className={styles.volumeIcon} aria-label="Volume muted">
          <MuteIcon />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.netflixHeader}>
            <NetflixLogo className={styles.netflixLogo} />
            <span className={styles.seriesLabel}>SERIES</span>
          </div>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.actionButtons}>
            <button
              className={styles.playButton}
              onClick={() => {
                if (videoUrl) {
                  setIsVideoDialogOpen(true);
                }
              }}
              type="button"
            >
              <PlayIcon className={styles.playIcon} />
              Play
            </button>
            <button
              className={styles.iconButton}
              onClick={defaultProps.onMyList}
              aria-label="Add to My List"
              type="button"
            >
              <PlusIcon className={styles.iconButtonIcon} />
            </button>
            <button
              className={styles.iconButton}
              onClick={defaultProps.onRate}
              aria-label="Rate this show"
              type="button"
            >
              <ThumbsUpIcon className={styles.iconButtonIcon} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.basicInfo}>
              {defaultProps.isNew && <span className={styles.newBadge}>New</span>}
              {defaultProps.seasons && <span className={styles.infoText}>{defaultProps.seasons} Seasons</span>}
              {defaultProps.year && <span className={styles.infoText}>{defaultProps.year}</span>}
              {defaultProps.isHD && <span className={styles.badge}>HD</span>}
              {defaultProps.hasAudioDescription && <span className={styles.badge}>AD</span>}
            </div>

            {(defaultProps.maturityRating || defaultProps.contentWarnings) && (
              <div className={styles.ratingSection}>
                {defaultProps.maturityRating && (
                  <span className={styles.maturityBadge}>{defaultProps.maturityRating}</span>
                )}
                {defaultProps.contentWarnings && (
                  <span className={styles.contentWarnings}>{defaultProps.contentWarnings}</span>
                )}
              </div>
            )}

            {(defaultProps.isTop10 || defaultProps.popularityRank) && (
              <div className={styles.popularitySection}>
                {defaultProps.isTop10 && <span className={styles.top10Badge}>10</span>}
                {defaultProps.popularityRank && (
                  <span className={styles.popularityText}>{defaultProps.popularityRank}</span>
                )}
              </div>
            )}

            {synopsis && <p className={styles.synopsis}>{synopsis}</p>}
          </div>

          <div className={styles.rightColumn}>
            {defaultProps.cast && (
              <div>
                <div className={styles.infoLabel}>Cast:</div>
                <div className={styles.infoValue}>{formatArray(defaultProps.cast)}</div>
              </div>
            )}

            {defaultProps.genres && (
              <div>
                <div className={styles.infoLabel}>Genres:</div>
                <div className={styles.infoValue}>{formatArray(defaultProps.genres)}</div>
              </div>
            )}

            {defaultProps.mood && (
              <div>
                <div className={styles.infoLabel}>This show is:</div>
                <div className={styles.moodText}>
                  <span className={styles.moodLabel}>{defaultProps.mood}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {episodes && episodes.length > 0 && (
          <div className={styles.episodesSection}>
            <EpisodeList
              episodes={episodes}
              onEpisodeClick={defaultProps.onEpisodeClick}
              currentEpisodeId={defaultProps.currentEpisodeId}
              className={styles.episodeList}
            />
          </div>
        )}
      </div>

      {videoUrl && (
        <VideoDialog
          isOpen={isVideoDialogOpen}
          onClose={() => setIsVideoDialogOpen(false)}
          videoUrl={videoUrl}
          title={title}
          episodes={episodes}
          onEpisodeClick={(episode) => {
            defaultProps.onEpisodeClick(episode);
            setIsVideoDialogOpen(false);
          }}
          currentEpisodeId={defaultProps.currentEpisodeId}
        />
      )}
    </ReactModal>
  );
};

export default ShowDetailsDialog;

