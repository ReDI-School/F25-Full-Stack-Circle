export interface ProgressBarProps {
  /** Fortschritt in Prozent (0-100) */
  value: number;
  /** Maximale Zeit als String (z.B. '1:00:41') */
  maxLabel?: string;
  /** Aktuelle Zeit als String (z.B. '00:12') */
  currentLabel?: string;
  /** Zeigt den Slider-Knopf an (z.B. für Hover oder Drag) */
  showThumb?: boolean;
  /** Optional: Farbe für den Fortschritt */
  color?: string;
  /** Optional: Handler für onChange (z.B. für Drag) */
  onChange?: (value: number) => void;
  /** Optional: Zusätzliche CSS-Klasse */
  className?: string;
  /** Optional: Aktueller Ladefortschritt in Prozent (0-100) */
  loaded?: number;
}
