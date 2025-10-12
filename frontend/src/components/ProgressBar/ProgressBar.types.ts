export interface ProgressBarProps {
  /** The current value in seconds */
  value: number;
  /** The duration of the video in seconds */
  duration: number;
  /** Zeigt den Slider-Knopf an (z.B. für Hover oder Drag) */
  showThumb?: boolean;
  /** Optional: Farbe für den Fortschritt */
  color?: string;
  /** Optional: Zusätzliche CSS-Klasse */
  className?: string;
  /** Optional: Actual loaded data in seconds */
  loaded?: number;
}
