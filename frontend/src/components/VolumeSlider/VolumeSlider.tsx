import React, { useMemo } from 'react';
import styles from './VolumeSlider.module.css';
import type { VolumeSliderProps } from './VolumeSlider.types';

const VolumeSlider: React.FC<VolumeSliderProps> = ({
  value,
  onChange,
  className = '',
  iconType = 'High',
  IconComponent,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.min(100, Number(e.target.value)));
    if (onChange) {
      onChange(newValue);
    }
  };

  const sliderTypeClass = useMemo(() => {
    if (iconType === 'Middle') return styles.volumeSliderMedium;
    if (iconType === 'Mute') return styles.volumeSliderMute;
    return styles.volumeSliderHigh;
  }, [iconType]);

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
      <div className={styles.iconContainer}>{IconComponent && <IconComponent />}</div>
    </div>
  );
};

export default VolumeSlider;
