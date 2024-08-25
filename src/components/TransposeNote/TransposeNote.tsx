'use client'
import { CircleFifths } from '@/components/CircleFifths';
import { InstrumentSelector } from '@/components/InstrumentSelector';
import { TransposeContext, useCreateTransposeState } from '@/components/useTranspose';
import { Container } from '@/types';

import styles from './TransposeNote.module.css';

export const TransposeNote = ({ children }: Container) => {
  const {
    originalNote,
    transposedNote,
    instrument1,
    instrument2,
    setOriginalNote,
    setInstrument1,
    setInstrument2,
    setTransposedNote
  } = useCreateTransposeState();

  return (
    <TransposeContext.Provider value={
      {
        originalNote,
        instrument1,
        instrument2,
        setInstrument1,
        setInstrument2,
        setOriginalNote,
        setTransposedNote,
        transposedNote,
      }} >
      <div className={styles.container}>
        <InstrumentSelector />
        <CircleFifths />
        {children}
      </div>
    </TransposeContext.Provider >
  );
}
