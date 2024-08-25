'use client'

import { useState } from 'react';

import { scaleOptions } from '@/constants/options';

import { Select } from './Select';

export const TransposeScales = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Transpose Scales</h1>
      <p>Coming soon</p>
      <Select onChange={setValue} options={scaleOptions} value={value} />

    </div>
  );
}
