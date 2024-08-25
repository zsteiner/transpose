'use client'

import { useState } from 'react';

import { scaleOptions } from '@/constants/options';

import { PageContainer } from './PageContainer';
import { Select } from './Select';

export const TransposeScales = () => {
  const [value, setValue] = useState('');

  return (
    <PageContainer>
      <Select onChange={setValue} options={scaleOptions} value={value} />
    </PageContainer>
  );
}
