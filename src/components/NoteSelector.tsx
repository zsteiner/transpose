'use client'
import { CircleFifths } from '@/components/CircleFifths';
import { Container } from '@/types';

import { InstrumentSelector, InstrumentSelectorContext, useCreateInstrumentSelectorState } from './InstrumentSelector';

export const NoteSelector = ({ children }: Container) => {
  const { instrument1, instrument2, setInstrument1, setInstrument2 } = useCreateInstrumentSelectorState();

  return (
    <InstrumentSelectorContext.Provider value={
      {
        instrument1,
        instrument2,
        setInstrument1,
        setInstrument2,
      }} >
      <InstrumentSelector />
      <CircleFifths />
      {children}
    </InstrumentSelectorContext.Provider >
  );
}
