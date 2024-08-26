'use client'
import { useState } from 'react';

import { chords } from '@/constants/chords';
import { chordOptions } from '@/constants/options';
import { transposeNoteSemitones } from '@/utils/transposeNoteSemitones';

import { Notation } from './Notation/Notation';
import { PageContainer } from './PageContainer';
import { Select } from './Select';
import styles from './TransposeContainer.module.css';
import { useTransposeState } from './useTranspose';

export const TransposeChords = () => {
  const { originalNote, transposedNote } = useTransposeState();

  const [value, setValue] = useState(chordOptions[0].value);
  const { notes, key } = chords[value as keyof typeof chords];

  const transposeSemitonesOriginal = transposeNoteSemitones(1, originalNote.position);
  const transposeSemitonesTransposed = transposeNoteSemitones(1, transposedNote?.position || 1);

  return (
    <PageContainer>
      <Select onChange={setValue} options={chordOptions} value={value} />
      <Notation className={styles.chords} notationKey={key} notes={notes} transposeSemitones={transposeSemitonesOriginal} />
      {transposedNote ? (<Notation className={styles.chords} notationKey={key} notes={notes} transposeSemitones={transposeSemitonesTransposed} />) : null
      }
    </PageContainer>
  );
}
