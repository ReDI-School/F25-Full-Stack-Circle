import React, { useMemo } from 'react';
import styles from './ProgressBar.module.css';
import type { ProgressBarProps } from './ProgressBar.types';

const ProgressBar: React.FC<ProgressBarProps & { ariaLabel?: string }> = ({
  value,
  loaded = 0,
  onMouseDown,
  duration,
  showThumb = false,
  color,
  className = '',
  ariaLabel = 'Video progress', // Default aria-label for accessibility, and you can override it via props
}) => {
  // Use useMemo to optimize calculations and render styles only when dependencies change
  const progress = useMemo(() => (value / duration) * 100, [value, duration]);
  const loadedValue = useMemo(() => (loaded / duration) * 100, [loaded, duration]);
  const progressStyle = useMemo(
    () => (color ? { background: color, width: `${progress}%` } : { width: `${progress}%` }),
    [color, progress]
  );
  const loadedStyle = useMemo(() => ({ width: `${loadedValue}%` }), [loadedValue]);
  const thumbStyle = useMemo(
    () => ({
      left: `calc(${progress}% )`,
      background: color || undefined,
    }),
    [progress, color]
  );

  const formattedTime = useMemo(() => {
    if (duration >= 3600) return new Date(value * 1000).toISOString().slice(11, 19);
    else return new Date(value * 1000).toISOString().slice(14, 19);
  }, [value, duration]);

  return (
    <div className={`${styles.progressBarContainer} ${className}`.trim()}>
      <div className={styles.progressBar} onMouseDown={(e) => onMouseDown(e)}>
        <div className={styles.progressBarLoaded} style={loadedStyle} />
        <div className={styles.progressBarTrack} style={progressStyle} />
        {showThumb && (
          <div
            className={styles.progressBarThumb}
            style={thumbStyle}
            tabIndex={0}
            role="slider"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-label={ariaLabel}
          />
        )}
      </div>
      {formattedTime}
    </div>
  );
};

export default ProgressBar;
