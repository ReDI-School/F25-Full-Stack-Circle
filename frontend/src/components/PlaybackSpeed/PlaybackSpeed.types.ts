export interface PlaybackSpeedProps {
  /** Current playback speed value (0.5, 0.75, 1, 1.25, 1.5) */
  value?: number;
  /** Handler called when playback speed changes */
  onChange?: (value: number) => void;
}
