'use client';

import { scaleOptions } from '@/constants/options';
import { scales } from '@/constants/scales';

import styles from './TransposeContainer.module.css';
import { TransposeNotation } from './TransposeNotation';

export const TransposeScales = () => {
  return (
    <TransposeNotation
      data={scales}
      notationClassName={styles.scales}
      options={scaleOptions}
    />
  );
};
