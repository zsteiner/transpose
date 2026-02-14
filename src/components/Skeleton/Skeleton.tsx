import classnames from 'classnames';
import { CSSProperties } from 'react';

import styles from './Skeleton.module.css';

type SkeletonProps = {
  inlineSize?: string;
  blockSize?: string;
  borderRadius?: string;
  circle?: boolean;
  className?: string;
};

export const Skeleton = ({
  inlineSize,
  blockSize,
  borderRadius,
  circle,
  className,
}: SkeletonProps) => {
  const style: CSSProperties = {
    ...(inlineSize && { inlineSize }),
    ...(blockSize && { blockSize }),
    ...(borderRadius && { borderRadius }),
  };

  return (
    <div
      className={classnames(styles.skeleton, { [styles.circle]: circle }, className)}
      style={style}
    />
  );
};
