import React from 'react';
import * as styles from './InfiniteMarquee.module.scss';

interface InfiniteMarqueeProps {
  classname?: string; 
}
const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({classname }) => {

  return (
    <div className={`${styles.itemsWrap} ${classname}`}>
      <div className={`${styles.items} ${styles.marquee}`} aria-hidden="false">
        {[...Array(10)].map((_, index) => (
          <div key={index} className={styles.item}>
            musya.brovkina
          </div>
        ))}
      </div>
      <div className={`${styles.items} ${styles.marquee}`} aria-hidden="true">
        {[...Array(10)].map((_, index) => (
          <div key={index} className={styles.item}>
            musya.brovkina
          </div>
        ))}
      </div>
    </div>
  );
};


export default InfiniteMarquee;
