import React, { useMemo } from 'react';
import styles from './ProgressBar.module.css';
import type { ProgressBarProps } from './ProgressBar.types';

const ProgressBar: React.FC<ProgressBarProps & { ariaLabel?: string }> = ({
  value,
  loaded = 0,
  maxLabel,
  currentLabel,
  showThumb = false,
  color,
  onChange,
  className = '',
  ariaLabel = 'Video progress', // Default aria-label for accessibility, and you can override it via props
}) => {
  // Use useMemo to optimize calculations and render styles only when dependencies change
  const progress = useMemo(() => Math.max(0, Math.min(100, value)), [value]);
  const loadedValue = useMemo(() => Math.max(0, Math.min(100, loaded)), [loaded]);
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

  return (
    <div className={`${styles.progressBarContainer} ${className}`.trim()}>
      <div className={styles.progressBar}>
        <div className={styles.progressBarLoaded} style={loadedStyle} />
        <div className={styles.progressBarTrack} style={progressStyle} />
        {showThumb && (
          <div
            className={styles.progressBarThumb}
            style={thumbStyle}
            tabIndex={0}
            role="slider"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={ariaLabel}
            onMouseDown={
              onChange
                ? (e) => {
                    e.preventDefault();
                  }
                : undefined
            }
          />
        )}
      </div>
      {(maxLabel || currentLabel) && (
        <span className={styles.progressBarLabel}>{currentLabel || maxLabel}</span>
      )}
    </div>
  );
};

export default ProgressBar;
