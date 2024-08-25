import { createContext } from 'react';

import { Instrument } from '@/types';

export type InstrumentSelectorContextType = {
  instrument1?: Instrument;
  instrument2?: Instrument;
  setInstrument1: (instrument?: Instrument) => void;
  setInstrument2: (instrument?: Instrument) => void;
};

export const InstrumentSelectorContext = createContext<InstrumentSelectorContextType>({
  instrument1: null,
  instrument2: null,
  setInstrument1: () => { },
  setInstrument2: () => { },
});
