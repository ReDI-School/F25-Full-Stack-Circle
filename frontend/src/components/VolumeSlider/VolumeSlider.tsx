import React, { useMemo } from 'react';
import styles from './VolumeSlider.module.css';
import type { VolumeSliderProps } from './VolumeSlider.types';
import MuteIcon from '../../assets/icons/muteVolume.svg?react';
import HighIcon from '../../assets/icons/highVolume.svg?react';
import MiddleIcon from '../../assets/icons/middleVolume.svg?react';

const VolumeSlider: React.FC<VolumeSliderProps> = ({ value, onChange, className = '' }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.min(100, Number(e.target.value)));
    if (onChange) {
      onChange(newValue);
    }
  };

  // Dynamisch Icon und Style wählen
  const { IconComponent, sliderTypeClass } = useMemo(() => {
    if (value === 0) {
      return { IconComponent: MuteIcon, sliderTypeClass: styles.volumeSliderMute };
    }
    if (value >= 90) {
      return { IconComponent: HighIcon, sliderTypeClass: styles.volumeSliderHigh };
    }
    return { IconComponent: MiddleIcon, sliderTypeClass: styles.volumeSliderMedium };
  }, [value]);

  return (
    <div className={styles.volumeSliderContainer}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={handleChange}
          className={`${styles.volumeSlider} ${sliderTypeClass} ${className}`.trim()}
          style={{ '--value': value } as React.CSSProperties}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Volume control"
        />
      </div>
      <div className={styles.iconContainer}>
        <IconComponent />
      </div>
    </div>
  );
};

export default VolumeSlider;
