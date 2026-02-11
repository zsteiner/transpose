'use client';

import { scaleOptions } from '@/constants/options';
import { scales } from '@/constants/scales';

import { TransposeNotation } from './TransposeNotation';
import { useTranspose } from './useTranspose';

export const TransposeScales = () => {
  const { selectedScale, setSelectedScale } = useTranspose();

  return (
    <TransposeNotation
      data={scales}
      onChange={setSelectedScale}
      options={scaleOptions}
      value={selectedScale}
    />
  );
};
