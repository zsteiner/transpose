'use client';

import classnames from 'classnames';

import { Notation } from './Notation/Notation';
import { Select } from './Select';
import styles from './TransposeNotation.module.css';
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
  value: string;
  onChange: (value: string) => void;
  grid?: boolean;
};

export const TransposeNotation = ({
  options,
  data,
  value,
  onChange,
  grid,
}: TransposeNotationProps) => {
  const { originalNote, transposedNote } = useTranspose();
  const { transposeSemitonesOriginal, transposeSemitonesTransposed } =
    useTransposeSemitones({ originalNote, transposedNote });

  const { notes, key } = data[value as keyof typeof data];

  return (
    <div className={styles.container}>
      <Select
        onChange={onChange}
        options={options}
        value={value}
      />
      <div className={classnames(styles.notationGroup, grid && styles.grid)}>
        <Notation
          notationKey={key}
          notes={notes}
          transposeSemitones={transposeSemitonesOriginal}
        />
        {transposedNote ? (
          <Notation
            isTransposed
            notationKey={key}
            notes={notes}
            transposeSemitones={transposeSemitonesTransposed}
          />
        ) : null}
      </div>
    </div>
  );
};
