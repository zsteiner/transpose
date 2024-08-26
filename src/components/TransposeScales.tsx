'use client'

import { useState } from 'react';

import { scaleOptions } from '@/constants/options';
import { scales } from '@/constants/scales';
import { transposeNoteSemitones } from '@/utils/transposeNoteSemitones';

import { Notation } from './Notation/Notation';
import { PageContainer } from './PageContainer';
import { Select } from './Select';
import styles from './TransposeContainer.module.css';
import { useTransposeState } from './useTranspose';

export const TransposeScales = () => {
  const { originalNote, transposedNote } = useTransposeState();

  const [value, setValue] = useState(scaleOptions[0].value);
  const { notes, key } = scales[value as keyof typeof scales];

  const transposeSemitonesOriginal = transposeNoteSemitones(1, originalNote.position);
  const transposeSemitonesTransposed = transposeNoteSemitones(1, transposedNote?.position || 1);

  return (
    <PageContainer>
      <Select onChange={setValue} options={scaleOptions} value={value} />
      <Notation className={styles.scales} notationKey={key} notes={notes} transposeSemitones={transposeSemitonesOriginal} />
      {transposedNote ? (<Notation className={styles.scales} notationKey={key} notes={notes} transposeSemitones={transposeSemitonesTransposed} />) : null
      }
    </PageContainer>
  );
}
