'use client';
import { CircleFifths } from '@/components/CircleFifths';
import { InstrumentSelector } from '@/components/InstrumentSelector';
import {
  TransposeContext,
  useCreateTransposeState,
} from '@/components/useTranspose';
import { useUrlState } from '@/hooks/useUrlState';
import { useUrlSync } from '@/hooks/useUrlSync';
import { Container } from '@/types';

import { PageContainer } from './PageContainer';

export const TransposeContainer = ({ children }: Container) => {
  // Read initial state from URL
  const urlState = useUrlState();

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
  } = useCreateTransposeState(urlState);

  // Sync state changes back to URL
  useUrlSync(originalNote, instrument1, instrument2);

  return (
    <TransposeContext.Provider
      value={{
        originalNote,
        instrument1,
        instrument2,
        setInstrument1,
        setInstrument2,
        setOriginalNote,
        setTransposedNote,
        transposeFactor,
        transposedNote,
      }}
    >
      <PageContainer>
        <InstrumentSelector />
        <CircleFifths />
        {children}
      </PageContainer>
    </TransposeContext.Provider>
  );
};
