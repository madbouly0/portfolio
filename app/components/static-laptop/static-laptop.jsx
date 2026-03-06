import { classes } from '~/utils/style';
import styles from './static-laptop.module.css';

export const StaticLaptop = ({ screenshot, className }) => {
    return (
        <div className={classes(styles.laptopWrapper, className)}>
            <div className={styles.laptopChassis}>
                <div className={styles.laptopScreen}>
                    <div className={styles.camera} />
                    <img
                        src={screenshot?.src || screenshot}
                        alt={screenshot?.alt || 'Project screenshot'}
                        className={styles.laptopScreenImage}
                        loading="lazy"
                    />
                </div>
                <div className={styles.laptopBase}>
                    <div className={styles.laptopTrackpad} />
                </div>
            </div>
        </div>
    );
};
