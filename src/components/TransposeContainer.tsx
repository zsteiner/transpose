'use client';
import { CircleFifths } from '@/components/CircleFifths';
import { InstrumentSelector } from '@/components/InstrumentSelector';
import { TransposeMachineProvider } from '@/components/useTranspose';
import { useUrlState } from '@/hooks/useUrlState';
import { Container } from '@/types';

import { PageContainer } from './PageContainer';
import { UrlSyncWrapper } from './UrlSyncWrapper';

export const TransposeContainer = ({ children }: Container) => {
  // Read initial state from URL
  const urlState = useUrlState();

  return (
    <TransposeMachineProvider initialState={urlState}>
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
