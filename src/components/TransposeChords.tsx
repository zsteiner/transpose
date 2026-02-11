'use client';

import { chords } from '@/constants/chords';
import { chordOptions } from '@/constants/options';

import { TransposeNotation } from './TransposeNotation';
import { useTranspose } from './useTranspose';

export const TransposeChords = () => {
  const { selectedChord, setSelectedChord } = useTranspose();

  return (
    <TransposeNotation
      data={chords}
      grid
      onChange={setSelectedChord}
      options={chordOptions}
      value={selectedChord}
    />
  );
};
