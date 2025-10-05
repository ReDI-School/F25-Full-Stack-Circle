import styles from './Label.module.css';

interface LabelProps {
    type?: 'ranking' | 'top10-icon' | 'status';
    variant?: 'Recently Added' | 'New Season' | 'Leaving Soon';
    ranking?: number;
    category?: string;
    classname?: string;
}

export default function  Label({
    type,
    variant,
    ranking,
    category,
    classname
}: LabelProps) {

    if (type === 'ranking') {
        return (
            <div className={`${styles.rankingContainer} ${classname || ''}`}>
                <div className={styles.top10Icon}>
                    <span className={styles.topText}>TOP</span>
                    <span className={styles.tenText}>10</span>
                </div>
                {ranking && category && (
                    <span className={styles.rankingText}>
            #{ranking} in {category}
          </span>
                )}
            </div>
        );
    }

    if (type === 'status') {
        return (
            <div className={`${styles.statusContainer} ${classname || ''}`}>
                <div className={styles.statusLabel}>
                    <span className={styles.statusText}>{variant}</span>
                </div>
            </div>
        );
    }

    if (type === 'top10-icon') {
        return (
            <div className={`${styles.top10Container} ${classname || ''}`}>
                <div className={styles.top10Icon}>
                    <span className={styles.topText }>TOP</span>
                    <span className={styles.tenText}>10</span>
                </div>
            </div>
        );
    }

    return null;

    // return (
    //     <>
    //         <div className={styles.rankingContainer}>
    //             <div className={styles.top10Icon}>
    //                 <span className="top-text">TOP</span>
    //                 <span className="ten-text">10</span>
    //             </div>
    //             <span className="ranking-text">#{ranking} in {category}</span>
    //         </div>
    //
    //         <div className="status-container">
    //             <div className={styles.statusLabel}>
    //                 <span className="status-text">{variant}</span>
    //             </div>
    //
    //         </div>
    //     </>
    // )
}