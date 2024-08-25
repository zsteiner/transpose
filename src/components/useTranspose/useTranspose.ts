import { useContext, useEffect, useState } from 'react';

import { instruments } from '@/constants/instruments';
import { notes } from '@/constants/notes';
import { Instrument, Note } from '@/types';
import { transposeNote } from '@/utils/transposeNote';

import { TransposeContext } from './context';

export const useCreateTransposeState = () => {
  const [originalNote, setOriginalNote] = useState<Note>(notes[0]);
  const [transposedNote, setTransposedNote] = useState<Note | undefined>(undefined);
  const [instrument1, setInstrument1] = useState<Instrument | undefined>(instruments.piano);
  const [instrument2, setInstrument2] = useState<Instrument | undefined>(undefined);
  const [transposeFactor, setTransposeFactor] = useState<number>(0);

  useEffect(() => {
    const instrument1TransposeFactor = instrument1?.transposeFactor || 0;
    const instrument2TransposeFactor = instrument2?.transposeFactor || 0;

    setTransposeFactor(instrument2TransposeFactor - instrument1TransposeFactor);
  }, [instrument1, instrument2]);

  return {
    originalNote,
    instrument1,
    instrument2,
    setOriginalNote,
    setInstrument1,
    setInstrument2,
    setTransposedNote,
    transposeFactor,
    transposedNote,
  };
}

export const useTransposeState = () => {
  const {
    instrument1,
    instrument2,
    originalNote,
    setInstrument1,
    setInstrument2,
    setOriginalNote,
    setTransposedNote,
    transposeFactor,
    transposedNote,
  } = useContext(TransposeContext);

  const clearSelection = (index: number) => {
    if (index === 1) {
      setInstrument1(undefined);
    } else {
      setInstrument2(undefined);
      setTransposedNote(undefined);
    }
  }


  useEffect(() => {
    if (instrument2) {
      setTransposedNote(
        notes[transposeNote(originalNote.position, transposeFactor) - 1]
      );
    }
  }, [originalNote, instrument1, instrument2, setTransposedNote, transposeFactor]);

  return {
    originalNote,
    clearSelection,
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
    setOriginalNote,
    setTransposedNote,
    transposedNote,
    transposeFactor,
  };
}
