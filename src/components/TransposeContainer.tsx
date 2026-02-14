'use client';
import { use } from 'react';

import { CircleFifths } from '@/components/CircleFifths';
import { InstrumentSelector } from '@/components/InstrumentSelector';
import { TransposeMachineProvider } from '@/components/useTranspose';
import { Container } from '@/types';

import { PageContainer } from './PageContainer';
import { UrlSyncWrapper } from './UrlSyncWrapper';
import { useUrlState } from './useUrlState';

const minLoadTime = new Promise<void>((resolve) => setTimeout(resolve, 300));

export const TransposeContainer = ({ children }: Container) => {
  use(minLoadTime);
  // Read initial state from URL
  const { scale, chord, key, keyNote, keyScale, ...urlState } = useUrlState();

  // On /custom route, the key param (e.g., "Am") takes precedence for note and scale
  const initialNote = keyNote || urlState.note;
  const initialScale = keyScale || scale;

  return (
    <TransposeMachineProvider initialState={{ ...urlState, note: initialNote, selectedScale: initialScale, selectedChord: chord }}>
      <UrlSyncWrapper>
        <PageContainer>
          <InstrumentSelector />
          <CircleFifths />
          {children}
        </PageContainer>
      </UrlSyncWrapper>
    </TransposeMachineProvider>
  );
};
