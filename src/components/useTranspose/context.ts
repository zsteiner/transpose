import { createContext } from 'react';

import { instruments } from '@/constants/instruments';
import { notes } from '@/constants/notes';
import { Instrument, Note } from '@/types';

export type TransposeContextType = {
  originalNote: Note;
  instrument1?: Instrument;
  instrument2?: Instrument;
  setOriginalNote: (note: Note) => void;
  setInstrument1: (instrument?: Instrument) => void;
  setInstrument2: (instrument?: Instrument) => void;
  setTransposedNote: (note?: Note) => void;
  transposeFactor: number;
  transposedNote?: Note;
};

export const TransposeContext = createContext<TransposeContextType>({
  originalNote: notes[0],
  instrument1: instruments.piano,
  instrument2: undefined,
  setInstrument1: () => {},
  setInstrument2: () => {},
  setOriginalNote: () => {},
  setTransposedNote: () => {},
  transposeFactor: 0,
  transposedNote: undefined,
});
