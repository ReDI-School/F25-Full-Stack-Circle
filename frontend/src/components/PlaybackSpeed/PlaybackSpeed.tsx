import React, { useState } from 'react';
import styles from './PlaybackSpeed.module.css';
import type { PlaybackSpeedProps } from './PlaybackSpeed.types';

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5];

const PlaybackSpeed: React.FC<PlaybackSpeedProps> = ({ value = 1, onChange, className = '' }) => {
  const [currentSpeed, setCurrentSpeed] = useState(value);

  // Map speed values to slider positions (0-4)
  const speedToIndex = (speed: number): number => {
    const index = PLAYBACK_SPEEDS.indexOf(speed);
    return index === -1 ? 2 : index; // Default to 1x (index 2)
  };

  const indexToSpeed = (index: number): number => {
    return PLAYBACK_SPEEDS[index] || 1;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);
    const newSpeed = indexToSpeed(index);
    setCurrentSpeed(newSpeed);
    if (onChange) {
      onChange(newSpeed);
    }
  };

  const currentIndex = speedToIndex(currentSpeed);

  return (
    <div className={`${styles.playbackSpeedContainer} ${className}`.trim()}>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={0}
          max={4}
          step={1}
          value={currentIndex}
          onChange={handleChange}
          className={styles.playbackSlider}
          aria-label="Playback speed control"
          aria-valuemin={0}
          aria-valuemax={4}
          aria-valuenow={currentIndex}
          aria-valuetext={`${currentSpeed}x speed`}
        />
      </div>

      <div className={styles.labelsContainer}>
        {PLAYBACK_SPEEDS.map((speed, index) => (
          <span
            key={speed}
            className={`${styles.speedLabel} ${
              index === currentIndex ? styles.active : ''
            } ${speed === 1 ? styles.normal : ''}`.trim()}
          >
            {speed}x{speed === 1 ? ' (Normal)' : ''}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PlaybackSpeed;
