'use client'
import { useState } from 'react';

import { chordOptions } from '@/constants/options';

import { PageContainer } from './PageContainer';
import { Select } from './Select';

export const TransposeChords = () => {
  const [value, setValue] = useState('');

  return (
    <PageContainer>
      <Select onChange={setValue} options={chordOptions} value={value} />
    </PageContainer>
  );
}
