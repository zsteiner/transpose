'use client'

import { useState } from 'react';

import { scaleOptions } from '@/constants/options';
import { scales } from '@/constants/scales';

import { Notation } from './Notation/Notation';
import { PageContainer } from './PageContainer';
import { Select } from './Select';
import styles from './TransposeContainer.module.css';

export const TransposeScales = () => {
  const [value, setValue] = useState(scaleOptions[0].value);
  const { notes, key } = scales[value as keyof typeof scales];

  return (
    <PageContainer>
      <Select onChange={setValue} options={scaleOptions} value={value} />
      <Notation className={styles.scales} notationKey={key} notes={notes} transposeSteps={0} />
    </PageContainer>
  );
}
