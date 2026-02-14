import { useContext } from 'react';
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
  const { originalNote, transposedNote, instrument1, instrument2, transposeFactor, selectedScale, selectedChord, customNotation } = useSelector(
    machine,
    (state) => state.context,
  );

  const setOriginalNote = (note: Note) =>
    machine.send({ type: 'SET_ORIGINAL_NOTE', note });

  const setInstrument1 = (instrument?: Instrument) =>
    machine.send({ type: 'SET_INSTRUMENT1', instrument });

  const setInstrument2 = (instrument?: Instrument) =>
    machine.send({ type: 'SET_INSTRUMENT2', instrument });

  const clearSelection = (index: number) => {
    if (index === 1) {
      machine.send({ type: 'CLEAR_INSTRUMENT1' });
    } else {
      machine.send({ type: 'CLEAR_INSTRUMENT2' });
    }
  };

  const setSelectedScale = (value: string) =>
    machine.send({ type: 'SET_SELECTED_SCALE', value });

  const setSelectedChord = (value: string) =>
    machine.send({ type: 'SET_SELECTED_CHORD', value });

  const setCustomNotation = (value: string) =>
    machine.send({ type: 'SET_CUSTOM_NOTATION', value });

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
    customNotation,
    // Methods
    setOriginalNote,
    setInstrument1,
    setInstrument2,
    clearSelection,
    setSelectedScale,
    setSelectedChord,
    setCustomNotation,
  };
};
