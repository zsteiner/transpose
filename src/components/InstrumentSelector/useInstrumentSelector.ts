import { useContext, useState } from 'react';

import { instruments } from '@/constants/instruments';
import { Instrument } from '@/types';

import { InstrumentSelectorContext } from './context';

export const useCreateInstrumentSelectorState = () => {
  const [instrument1, setInstrument1] = useState<Instrument>(instruments.piano);
  const [instrument2, setInstrument2] = useState<Instrument | undefined>(undefined);

  return {
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
  };
}

export const useInstrumentSelector = () => {
  const {
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
  } = useContext(InstrumentSelectorContext);

  const clearSelection = (index: number) => {
    if (index === 1) {
      setInstrument1(null);
    } else {
      setInstrument2(null);
    }
  }

  return {
    instrument1,
    instrument2,
    setInstrument1,
    setInstrument2,
    clearSelection,
  };
}
