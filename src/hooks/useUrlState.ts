'use client';

import { useSearchParams } from 'next/navigation';

import { getNoteByIdentifier } from '@/constants/notes';
import { getInstrumentByKey } from '@/constants/instruments';
import type { Instrument, Note } from '@/types';

export type UrlState = {
  note?: Note;
  instrument1?: Instrument;
  instrument2?: Instrument;
};

/**
 * Hook to read and parse URL query parameters into app state
 */
export const useUrlState = (): UrlState => {
  const searchParams = useSearchParams();

  const noteParam = searchParams.get('note');
  const instrument1Param = searchParams.get('instrument1');
  const instrument2Param = searchParams.get('instrument2');

  const note = noteParam ? getNoteByIdentifier(noteParam) : undefined;
  const instrument1 = instrument1Param
    ? getInstrumentByKey(instrument1Param)
    : undefined;
  const instrument2 = instrument2Param
    ? getInstrumentByKey(instrument2Param)
    : undefined;

  return {
    note,
    instrument1,
    instrument2,
  };
};
