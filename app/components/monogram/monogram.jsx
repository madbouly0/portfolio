import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
   <svg
  aria-hidden
  className={classes(styles.monogram, className)}
  width="48"
  height="29"
  viewBox="0 0 48 29"
  ref={ref}
  {...props}
>
  <defs>
    <clipPath id={clipId}>
      <path d="M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z" />
    </clipPath>
  </defs>
  
  {/* Wrap the elements in a group and rotate around the center (24, 14.5) */}
  <g transform="rotate(180 24 14.5)">
    <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
    {highlight && (
      <g clipPath={`url(#${clipId})`}>
        <rect className={styles.highlight} width="100%" height="100%" />
      </g>
    )}
  </g>
</svg>
  );
});
