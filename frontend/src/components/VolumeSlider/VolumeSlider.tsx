import React, { useMemo, useState, useRef } from 'react';
import styles from './VolumeSlider.module.css';
import type { VolumeSliderProps } from './VolumeSlider.types';
import MuteIcon from '../../assets/icons/muteVolume.svg?react';
import HighIcon from '../../assets/icons/highVolume.svg?react';
import MiddleIcon from '../../assets/icons/middleVolume.svg?react';

const VolumeSlider: React.FC<VolumeSliderProps> = ({
  value,
  onChange,
  className = '',
  orientation = 'vertical',
}) => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(value > 0 ? value : 0.5);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.min(1, Number(e.target.value)));
    if (onChange) {
      onChange(newValue);
      if (newValue > 0) {
        setPreviousVolume(newValue);
      }
    }
  };

  const handleIconClick = () => {
    if (!onChange) return;

    if (value > 0) {
      // Currently not muted, so mute
      setPreviousVolume(value);
      onChange(0);
    } else {
      // Currently muted, restore previous volume
      onChange(previousVolume);
    }
  };

  const handleMouseEnter = () => {
    setIsSliderVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSliderVisible(false);
  };

  // Dynamically choose icon and style class
  const { IconComponent, sliderTypeClass } = useMemo(() => {
    if (value === 0) {
      return { IconComponent: MuteIcon, sliderTypeClass: styles.volumeSliderMute };
    }
    if (value >= 0.7) {
      return { IconComponent: HighIcon, sliderTypeClass: styles.volumeSliderHigh };
    }
    return { IconComponent: MiddleIcon, sliderTypeClass: styles.volumeSliderMedium };
  }, [value]);

  const isVertical = orientation === 'vertical';

  return (
    <div
      ref={containerRef}
      className={`${styles.volumeSliderContainer} ${isVertical ? styles.vertical : styles.horizontal} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.sliderWrapper} ${isSliderVisible ? styles.sliderVisible : ''}`}
        aria-hidden={!isSliderVisible}
      >
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={value}
            onChange={handleChange}
            className={`${styles.volumeSlider} ${sliderTypeClass}`.trim()}
            style={{ '--value': value } as React.CSSProperties}
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={1}
            aria-label="Volume control"
            aria-orientation={orientation}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleIconClick}
        className={styles.iconContainer}
        aria-label={value > 0 ? 'Mute' : 'Unmute'}
      >
        <IconComponent />
      </button>
    </div>
  );
};

export default VolumeSlider;
