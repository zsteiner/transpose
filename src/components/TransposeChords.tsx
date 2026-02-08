'use client';

import { chords } from '@/constants/chords';
import { chordOptions } from '@/constants/options';

import styles from './TransposeContainer.module.css';
import { TransposeNotation } from './TransposeNotation';

export const TransposeChords = () => {
  return (
    <TransposeNotation
      containerClassName={styles.chordContainer}
      data={chords}
      notationClassName={styles.chords}
      options={chordOptions}
    />
  );
};
