import { useEffect } from 'react';
import ReactModal from 'react-modal';
import { VideoPlayerWrapper } from '../VideoPlayerWrapper';
import type { VideoDialogProps } from './VideoDialog.types';
import styles from './VideoDialog.module.css';
import CloseIcon from '../../assets/icons/crossIcon.svg?react';

const VideoDialog = ({
  isOpen,
  onClose,
  videoUrl,
  title = '',
  episodes,
  onEpisodeClick,
  currentEpisodeId,
}: VideoDialogProps) => {
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
      shouldCloseOnOverlayClick={false}
    >
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close dialog"
        type="button"
      >
        <CloseIcon className={styles.closeIcon} />
      </button>

      <div className={styles.videoContainer}>
        <VideoPlayerWrapper
          src={videoUrl}
          title={title}
          playing={isOpen}
          size="full"
          volume={0.5}
          episodes={episodes}
          onEpisodeClick={onEpisodeClick}
          currentEpisodeId={currentEpisodeId}
        />
      </div>
    </ReactModal>
  );
};

export default VideoDialog;
