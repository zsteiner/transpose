'use client'
import { CircleFifths } from '@/components/CircleFifths';
import { Container } from '@/types';

import { InstrumentSelector, InstrumentSelectorContext, useCreateInstrumentSelectorState } from './InstrumentSelector';
import styles from './TransposeNote.module.css';

export const TransposeNote = ({ children }: Container) => {
  const { instrument1, instrument2, setInstrument1, setInstrument2 } = useCreateInstrumentSelectorState();

  return (
    <InstrumentSelectorContext.Provider value={
      {
        instrument1,
        instrument2,
        setInstrument1,
        setInstrument2,
      }} >
      <div className={styles.container}>
        <InstrumentSelector />
        <CircleFifths />
        {children}
      </div>
    </InstrumentSelectorContext.Provider >
  );
}
