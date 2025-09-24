interface VideoQualityLabelProps {
    /** The type of video quality label to display 
     * It can be one of the following values: 'DolbyVision', 'HDR', '4K', 'HD', 'UltraHD4K'
    */
    type?: 'DolbyVision' | 'HDR' | '4K' | 'HD' | 'UltraHD4K';
    className?: string;
}

export type { VideoQualityLabelProps };