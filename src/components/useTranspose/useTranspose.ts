import { useContext, useState } from 'react';

import { instruments } from '@/constants/instruments';
import { notes } from '@/constants/notes';
import { Instrument, Note } from '@/types';

import { TransposeContext } from './context';

export const useCreateTransposeState = () => {
  const [baseNote, setBaseNote] = useState<Note>(notes[0]);
  const [transposedNote, setTransposedNote] = useState<Note | undefined>(undefined);
  const [instrument1, setInstrument1] = useState<Instrument | undefined>(instruments.piano);
  const [instrument2, setInstrument2] = useState<Instrument | undefined>(undefined);

  return {
    baseNote,
    instrument1,
    instrument2,
    setBaseNote,
    setInstrument1,
    setInstrument2,
    setTransposedNote,
    transposedNote,
  };
}

export const useTransposeState = () => {
  const {
    baseNote,
    instrument1,
    instrument2,
    setBaseNote,
    setInstrument1,
    setInstrument2,
    setTransposedNote,
    transposedNote,
  } = useContext(TransposeContext);

  const clearSelection = (index: number) => {
    if (index === 1) {
      setInstrument1(undefined);
    } else {
      setInstrument2(undefined);
    }
  }

  return {
    baseNote,
    clearSelection,
    instrument1,
    instrument2,
    setBaseNote,
    setInstrument1,
    setInstrument2,
    setTransposedNote,
    transposedNote,
  };
}
