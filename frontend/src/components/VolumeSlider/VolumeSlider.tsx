import React, { useMemo } from 'react';
import styles from './VolumeSlider.module.css';
import type { VolumeSliderProps } from './VolumeSlider.types';
import VolumeHighIcon from './VolumeHighIcon';
import VolumeMediumIcon from './VolumeMediumIcon';
import VolumeMuteIcon from './VolumeMuteIcon';

const VolumeSlider: React.FC<VolumeSliderProps> = ({
  value,
  onChange,
  className = '',
  iconType = 'high',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.min(100, Number(e.target.value)));
    if (onChange) {
      onChange(newValue);
    }
  };
  /* Choosing the correct icon and slider style based on iconType prop */
  const { IconComponent, sliderTypeClass } = useMemo(() => {
    if (iconType === 'middle') {
      return { IconComponent: VolumeMediumIcon, sliderTypeClass: styles.volumeSliderMedium };
    }
    if (iconType === 'mute') {
      return { IconComponent: VolumeMuteIcon, sliderTypeClass: styles.volumeSliderMute };
    }
    return { IconComponent: VolumeHighIcon, sliderTypeClass: styles.volumeSliderHigh };
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
      <div className={styles.iconContainer}>
        <IconComponent />
      </div>
    </div>
  );
};

export default VolumeSlider;
