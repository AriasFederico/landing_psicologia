import { iconMap } from '../iconMap';
import styles from './DetailItem.module.scss';

export const DetailItem = ({ icon, title, line_1, line_2 }) => {
    const IconComponent = iconMap[icon];

    return (
        <div className={styles.detailItem}>
            {IconComponent && <IconComponent className={styles.icon} />}
            {/* icon */}
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{line_1}</p>
                <p className={styles.text}>{line_2}</p>
            </div>
        </div>
    );
};
