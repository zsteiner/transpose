'use client';
import { ReactNode, useEffect, useRef } from 'react';

import { useTranspose } from '@/components/useTranspose';
import { useUrlState, UrlState } from './useUrlState';
import { useUrlSync } from './useUrlSync';

type UrlSyncWrapperProps = {
  children: ReactNode;
};

/**
 * Wrapper component that syncs transpose state to/from URL.
 * Must be inside TransposeMachineProvider to access the hook.
 */
export const UrlSyncWrapper = ({ children }: UrlSyncWrapperProps) => {
  const {
    originalNote,
    instrument1,
    instrument2,
    setOriginalNote,
    setInstrument1,
    setInstrument2,
  } = useTranspose();

  // Read URL state (this updates when URL changes)
  const urlState = useUrlState();
  const isInitialMount = useRef(true);
  const previousUrlState = useRef<UrlState>(urlState);

  // Sync URL state changes TO the machine
  useEffect(() => {
    // On initial mount, skip - the machine was already initialized with URL state
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousUrlState.current = urlState;
      return;
    }

    // Only update machine if URL state actually changed (not if machine state changed)
    const urlNoteChanged = urlState.note?.note !== previousUrlState.current.note?.note;
    const urlInstrument1Changed = urlState.instrument1 !== previousUrlState.current.instrument1;
    const urlInstrument2Changed = urlState.instrument2 !== previousUrlState.current.instrument2;

    // When URL changes (e.g., browser back/forward), update the machine
    if (urlNoteChanged && urlState.note) {
      setOriginalNote(urlState.note);
    }

    if (urlInstrument1Changed) {
      setInstrument1(urlState.instrument1);
    }

    if (urlInstrument2Changed) {
      setInstrument2(urlState.instrument2);
    }

    // Track the previous URL state
    previousUrlState.current = urlState;
  }, [
    urlState,
    setOriginalNote,
    setInstrument1,
    setInstrument2,
  ]);

  // Sync state changes FROM the machine back to URL
  useUrlSync(originalNote, instrument1, instrument2);

  return <>{children}</>;
};
