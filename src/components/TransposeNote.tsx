'use client'
import { CircleFifths } from '@/components/CircleFifths';
import { Container } from '@/types';

import { InstrumentSelector } from './InstrumentSelector';
import styles from './TransposeNote.module.css';
import { TransposeContext, useCreateTransposeState } from './useTranspose';

export const TransposeNote = ({ children }: Container) => {
  const {
    baseNote,
    transposedNote,
    instrument1,
    instrument2,
    setBaseNote,
    setInstrument1,
    setInstrument2,
    setTransposedNote
  } = useCreateTransposeState();

  return (
    <TransposeContext.Provider value={
      {
        baseNote,
        instrument1,
        instrument2,
        setInstrument1,
        setInstrument2,
        setBaseNote,
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
