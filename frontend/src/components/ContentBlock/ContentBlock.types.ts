export type Layout = 'left-to-right' | 'right-to-left';

export interface ContentBlockProps {
  /**
   * The main headline text
   */
  headline: string;

  /**
   * The descriptive text below the headline
   */
  description: string;

  /**
   * The image to display alongside the content
   */
  image: string;

  /**
   * The layout direction of the content
   */
  layout?: Layout;

  /**
   * Image specifications
   */
  imageSpecs?: {
    /**
     * Supported aspect ratios
     */
    aspectRatios: ('16:9' | '4:3' | '1:1')[];

    /**
     * Enable lazy loading for performance
     */
    lazyLoad: boolean;
  };
}
