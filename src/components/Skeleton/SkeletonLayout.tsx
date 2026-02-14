'use client';

import { usePathname } from 'next/navigation';

import { Icon } from '../Icon';
import { Skeleton } from './Skeleton';
import styles from './Skeleton.module.css';

export const SkeletonLayout = () => {
  const pathname = usePathname();

  return (
    <div className={styles.layout}>
      <div className={styles.switcher}>
        <Skeleton className={styles.switcherBox} />
        <Icon
          className={styles.arrow}
          icon="arrowRight"
        />
        <Skeleton className={styles.switcherBox} />
      </div>
      <div className={styles.circleWrapper}>
        <Skeleton
          circle
          className={styles.circleSkeleton}
        />
      </div>
      {(pathname === '/scales' || pathname === '/chords') && (
        <Skeleton className={styles.selectSkeleton} />
      )}
      {pathname === '/custom' && (
        <Skeleton className={styles.textareaSkeleton} />
      )}
    </div>
  );
};
