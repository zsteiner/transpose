'use client'
import { useState } from 'react';

import { chords } from '@/constants/chords';
import { chordOptions } from '@/constants/options';

import { Notation } from './Notation/Notation';
import { PageContainer } from './PageContainer';
import { Select } from './Select';


export const TransposeChords = () => {
  const [value, setValue] = useState(chordOptions[0].value);
  const { notes, key } = chords[value as keyof typeof chords];

  return (
    <PageContainer>
      <Select onChange={setValue} options={chordOptions} value={value} />
      <Notation notationKey={key} notes={notes} transposeSteps={0} />
    </PageContainer>
  );
}
