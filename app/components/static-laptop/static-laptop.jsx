import { classes } from '~/utils/style';
import styles from './static-laptop.module.css';

export const StaticLaptop = ({ index, className }) => {
    // Fallback to 1 if index doesn't exactly map to an existing file to prevent broken images
    const mockupIndex = [1, 2, 3].includes(index) ? index : 1;

    return (
        <div className={classes(styles.laptopWrapper, className)}>
            <img
                src={`/laptop-mockup-project${mockupIndex}.png`}
                alt="Project Mockup"
                className={styles.laptopImage}
                loading="lazy"
            />
        </div>
    );
};
