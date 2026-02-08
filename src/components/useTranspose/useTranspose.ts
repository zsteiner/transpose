import { useContext, useMemo } from 'react';
import { useSelector } from '@xstate/react';

import { Instrument, Note } from '@/types';

import { TransposeMachineContext } from './provider';

/**
 * Hook that provides access to transpose state and actions.
 * Components should use this hook instead of accessing the machine directly.
 */
export const useTranspose = () => {
  const machine = useContext(TransposeMachineContext);

  if (!machine) {
    throw new Error('useTranspose must be used within TransposeMachineProvider');
  }

  // Select state values using selectors for optimal re-rendering
  const originalNote = useSelector(machine, (state) => state.context.originalNote);
  const transposedNote = useSelector(machine, (state) => state.context.transposedNote);
  const instrument1 = useSelector(machine, (state) => state.context.instrument1);
  const instrument2 = useSelector(machine, (state) => state.context.instrument2);

  // Compute derived values
  const transposeFactor = useMemo(() => {
    const instrument1TransposeFactor = instrument1?.transposeFactor || 0;
    const instrument2TransposeFactor = instrument2?.transposeFactor || 0;
    return instrument2TransposeFactor - instrument1TransposeFactor;
  }, [instrument1, instrument2]);

  // Expose methods that wrap machine events
  const setOriginalNote = (note: Note) => {
    machine.send({ type: 'SET_ORIGINAL_NOTE', note });
  };

  const setInstrument1 = (instrument?: Instrument) => {
    machine.send({ type: 'SET_INSTRUMENT1', instrument });
  };

  const setInstrument2 = (instrument?: Instrument) => {
    machine.send({ type: 'SET_INSTRUMENT2', instrument });
  };

  const clearSelection = (index: number) => {
    if (index === 1) {
      machine.send({ type: 'CLEAR_INSTRUMENT1' });
    } else {
      machine.send({ type: 'CLEAR_INSTRUMENT2' });
    }
  };

  // Return clean API with state values and methods
  return {
    // State values
    originalNote,
    transposedNote,
    instrument1,
    instrument2,
    transposeFactor,
    // Methods
    setOriginalNote,
    setInstrument1,
    setInstrument2,
    clearSelection,
  };
};
