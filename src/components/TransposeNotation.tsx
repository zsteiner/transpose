'use client';

import { useState } from 'react';

import { Note } from '@/types';

import { Notation } from './Notation/Notation';
import { PageContainer } from './PageContainer';
import { Select } from './Select';
import styles from './TransposeContainer.module.css';
import { useTranspose } from './useTranspose';
import { useTransposeSemitones } from './useTransposeSemitones';

type NotationData = {
  notes: string[];
  key: string;
};

type SelectOption = {
  value: string;
  label: string;
};

type TransposeNotationProps = {
  options: SelectOption[];
  data: Record<string, NotationData>;
  notationClassName: string;
  containerClassName?: string;
};

export const TransposeNotation = ({
  options,
  data,
  notationClassName,
  containerClassName,
}: TransposeNotationProps) => {
  const { originalNote, transposedNote } = useTranspose();
  const { transposeSemitonesOriginal, transposeSemitonesTransposed } =
    useTransposeSemitones({ originalNote, transposedNote });

  const [value, setValue] = useState(options[0].value);
  const { notes, key } = data[value as keyof typeof data];

  return (
    <PageContainer>
      <Select
        onChange={setValue}
        options={options}
        value={value}
      />
      <div className={containerClassName}>
        <Notation
          className={notationClassName}
          notationKey={key}
          notes={notes}
          transposeSemitones={transposeSemitonesOriginal}
        />
        {transposedNote ? (
          <Notation
            className={notationClassName}
            isTransposed
            notationKey={key}
            notes={notes}
            transposeSemitones={transposeSemitonesTransposed}
          />
        ) : null}
      </div>
    </PageContainer>
  );
};
