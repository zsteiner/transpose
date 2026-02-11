import { useCallback, useContext } from 'react';
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

  // Select all state values in a single selector for better performance
  // XState's useSelector does shallow comparison, so this only re-renders when values actually change
  const { originalNote, transposedNote, instrument1, instrument2, transposeFactor, selectedScale, selectedChord } = useSelector(
    machine,
    (state) => state.context,
  );

  // Memoize action creators to prevent unnecessary re-renders in child components
  const setOriginalNote = useCallback(
    (note: Note) => machine.send({ type: 'SET_ORIGINAL_NOTE', note }),
    [machine],
  );

  const setInstrument1 = useCallback(
    (instrument?: Instrument) => machine.send({ type: 'SET_INSTRUMENT1', instrument }),
    [machine],
  );

  const setInstrument2 = useCallback(
    (instrument?: Instrument) => machine.send({ type: 'SET_INSTRUMENT2', instrument }),
    [machine],
  );

  const clearSelection = useCallback(
    (index: number) => {
      if (index === 1) {
        machine.send({ type: 'CLEAR_INSTRUMENT1' });
      } else {
        machine.send({ type: 'CLEAR_INSTRUMENT2' });
      }
    },
    [machine],
  );

  const setSelectedScale = useCallback(
    (value: string) => machine.send({ type: 'SET_SELECTED_SCALE', value }),
    [machine],
  );

  const setSelectedChord = useCallback(
    (value: string) => machine.send({ type: 'SET_SELECTED_CHORD', value }),
    [machine],
  );

  // Return clean API with state values and methods
  return {
    // State values
    originalNote,
    transposedNote,
    instrument1,
    instrument2,
    transposeFactor,
    selectedScale,
    selectedChord,
    // Methods
    setOriginalNote,
    setInstrument1,
    setInstrument2,
    clearSelection,
    setSelectedScale,
    setSelectedChord,
  };
};
