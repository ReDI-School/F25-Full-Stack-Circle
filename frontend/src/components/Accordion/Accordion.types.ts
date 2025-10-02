interface AccordionItem {
  /**
   * Unique identifier for the accordion item
   */
  id: string;

  /**
   * The title/header text for the accordion item
   */
  title: string;

  /**
   * The content to display when expanded
   */
  content: React.ReactNode;
}

interface AccordionProps {
  /**
   * Array of accordion items to display
   */
  items: AccordionItem[];

  /**
   * The ID of the item that should be open by default (only one item can be open at a time)
   */
  defaultOpenItem?: string;

  /**
   * Callback fired when an item is expanded/collapsed
   */
  onToggle?: (itemId: string, isOpen: boolean) => void;

  /**
   * Additional CSS class name
   */
  className?: string;
}

export type { AccordionProps };
