import { classes } from '~/utils/style';
import styles from './static-laptop.module.css';

import mockup1 from './laptop-mockup-project1.png';
import mockup2 from './laptop-mockup-project2.png';
import mockup3 from './laptop-mockup-project3.png';

export const StaticLaptop = ({ index, className }) => {
    // Map index to the statically imported asset so Vite processes the URL correctly
    let src = mockup1;
    if (index === 2) src = mockup2;
    if (index === 3) src = mockup3;

    return (
        <div className={classes(styles.laptopWrapper, className)}>
            <img
                src={src}
                alt={`Project ${index} Mockup`}
                className={styles.laptopImage}
                loading="lazy"
            />
        </div>
    );
};
