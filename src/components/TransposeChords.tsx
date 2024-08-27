'use client'
import { useState } from 'react';

import { chords } from '@/constants/chords';
import { chordOptions } from '@/constants/options';

import { Notation } from './Notation/Notation';
import { PageContainer } from './PageContainer';
import { Select } from './Select';
import styles from './TransposeContainer.module.css';
import { useTransposeState } from './useTranspose';
import { useTransposeSemitones } from './useTransposeSemitones';

export const TransposeChords = () => {
  const { originalNote, transposedNote } = useTransposeState();
  const { transposeSemitonesOriginal, transposeSemitonesTransposed } = useTransposeSemitones({ originalNote, transposedNote });

  const [value, setValue] = useState(chordOptions[0].value);
  const { notes, key } = chords[value as keyof typeof chords];



  return (
    <PageContainer>
      <Select onChange={setValue} options={chordOptions} value={value} />
      <div className={styles.chordContainer}>
        <Notation className={styles.chords} notationKey={key} notes={notes} transposeSemitones={transposeSemitonesOriginal} />
        {transposedNote ? (
          <Notation
            className={styles.chords}
            isTransposed
            notationKey={key}
            notes={notes}
            transposeSemitones={transposeSemitonesTransposed}
          />) : null
        }
      </div>
    </PageContainer>
  );
}
