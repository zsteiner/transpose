'use client'
import { CircleFifths } from '@/components/CircleFifths';
import { InstrumentSelector } from '@/components/InstrumentSelector';
import { TransposeContext, useCreateTransposeState } from '@/components/useTranspose';
import { Container } from '@/types';

import styles from './TransposeContainer.module.css';

export const TransposeContainer = ({ children }: Container) => {
  const {
    originalNote,
    instrument1,
    instrument2,
    setOriginalNote,
    setInstrument1,
    setInstrument2,
    setTransposedNote,
    transposeFactor,
    transposedNote,
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
        transposeFactor,
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
