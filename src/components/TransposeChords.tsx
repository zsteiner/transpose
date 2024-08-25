'use client'
import { useState } from 'react';

import { chordOptions } from '@/constants/options';

import { Select } from './Select';

export const TransposeChords = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Transpose Chords</h1>
      <p>Coming soon</p>
      <Select onChange={setValue} options={chordOptions} value={value} />
    </div>
  );
}
