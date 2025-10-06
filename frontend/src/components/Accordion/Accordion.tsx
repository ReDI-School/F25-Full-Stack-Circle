import type { AccordionProps } from './Accordion.types';
import styles from './Accordion.module.css';

const Accordion = ({ items, defaultOpenItem = '1' }: AccordionProps) => {
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <details
          key={item.id}
          className={styles.accordionItem}
          name="notes"
          open={defaultOpenItem === item.id}
        >
          <summary>
            <p>{item.title}</p>
            <div className={styles.close}>
              <div className={styles.closeLine}></div>
              <div className={styles.closeLine}></div>
            </div>
          </summary>
          <div className={styles.accordionContent}>{item.content}</div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
