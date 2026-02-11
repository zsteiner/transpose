'use client';

import { useSearchParams } from 'next/navigation';

import { getAbcKeyNote, parseAbcKey } from '@/constants/abcNotation';
import { getNoteByIdentifier } from '@/constants/notes';
import { getInstrumentByKey } from '@/constants/instruments';
import { scales } from '@/constants/scales';
import { chords } from '@/constants/chords';
import type { Instrument, Note } from '@/types';

export type UrlState = {
  note?: Note;
  instrument1?: Instrument;
  instrument2?: Instrument;
  scale?: string;
  chord?: string;
  key?: string;
  keyNote?: Note;
  keyScale?: string;
};

/**
 * Hook to read and parse URL query parameters into app state
 */
export const useUrlState = (): UrlState => {
  const searchParams = useSearchParams();

  const noteParam = searchParams.get('note');
  const instrument1Param = searchParams.get('instrument1');
  const instrument2Param = searchParams.get('instrument2');
  const scaleParam = searchParams.get('scale');
  const chordParam = searchParams.get('chord');
  const keyParam = searchParams.get('key');

  const note = noteParam ? getNoteByIdentifier(noteParam) : undefined;
  const instrument1 = instrument1Param
    ? getInstrumentByKey(instrument1Param)
    : undefined;
  const instrument2 = instrument2Param
    ? getInstrumentByKey(instrument2Param)
    : undefined;
  const scale =
    scaleParam && scaleParam in scales ? scaleParam : undefined;
  const chord =
    chordParam && chordParam in chords ? chordParam : undefined;

  // Parse the ABC key param (e.g., "Am" → note A, scale minor)
  const key = keyParam && getAbcKeyNote(keyParam) ? keyParam : undefined;
  const parsedKey = key ? parseAbcKey(key) : undefined;
  const keyNote = key ? getAbcKeyNote(key) : undefined;
  const keyScale = parsedKey?.scale;

  return {
    note,
    instrument1,
    instrument2,
    scale,
    chord,
    key,
    keyNote,
    keyScale,
  };
};
