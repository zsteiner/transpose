import { assign, setup } from 'xstate';

import { instruments } from '@/constants/instruments';
import { notes } from '@/constants/notes';
import { Instrument, Note } from '@/types';
import { transposeNote } from '@/utils/transposeNote';

export type TransposeMachineContext = {
  originalNote: Note;
  transposedNote?: Note;
  instrument1?: Instrument;
  instrument2?: Instrument;
  transposeFactor: number;
  selectedScale: string;
  selectedChord: string;
  customNotation: string;
};

export type TransposeMachineEvents =
  | { type: 'SET_ORIGINAL_NOTE'; note: Note }
  | { type: 'SET_INSTRUMENT1'; instrument?: Instrument }
  | { type: 'SET_INSTRUMENT2'; instrument?: Instrument }
  | { type: 'CLEAR_INSTRUMENT1' }
  | { type: 'CLEAR_INSTRUMENT2' }
  | { type: 'SET_SELECTED_SCALE'; value: string }
  | { type: 'SET_SELECTED_CHORD'; value: string }
  | { type: 'SET_CUSTOM_NOTATION'; value: string };

export type TransposeMachineInput = {
  note?: Note;
  instrument1?: Instrument;
  instrument2?: Instrument;
  selectedScale?: string;
  selectedChord?: string;
  customNotation?: string;
};

/**
 * Helper function to calculate transpose factor
 */
const calculateTransposeFactor = (
  instrument1?: Instrument,
  instrument2?: Instrument,
): number => {
  const instrument1TransposeFactor = instrument1?.transposeFactor || 0;
  const instrument2TransposeFactor = instrument2?.transposeFactor || 0;
  return instrument2TransposeFactor - instrument1TransposeFactor;
};

/**
 * Helper function to calculate transposed note
 */
const calculateTransposedNote = (
  originalNote: Note,
  instrument1?: Instrument,
  instrument2?: Instrument,
): Note | undefined => {
  if (!instrument2) return undefined;

  const transposeFactor = calculateTransposeFactor(instrument1, instrument2);
  return notes[transposeNote(originalNote.position, transposeFactor)];
};

/**
 * Helper function to compute derived values (transposeFactor and transposedNote)
 * Call this after any context change that affects instruments or originalNote
 */
const computeDerivedValues = (
  originalNote: Note,
  instrument1?: Instrument,
  instrument2?: Instrument,
) => ({
  transposeFactor: calculateTransposeFactor(instrument1, instrument2),
  transposedNote: calculateTransposedNote(originalNote, instrument1, instrument2),
});

export const transposeMachine = setup({
  types: {
    context: {} as TransposeMachineContext,
    events: {} as TransposeMachineEvents,
    input: {} as TransposeMachineInput,
  },
}).createMachine({
  id: 'transpose',
  context: ({ input }) => {
    const originalNote = input.note || notes[0];
    const instrument1 = input.instrument1 || instruments.piano;
    const instrument2 = input.instrument2;

    return {
      originalNote,
      instrument1,
      instrument2,
      selectedScale: input.selectedScale || 'major',
      selectedChord: input.selectedChord || 'major',
      customNotation: input.customNotation || '',
      ...computeDerivedValues(originalNote, instrument1, instrument2),
    };
  },
  on: {
    SET_ORIGINAL_NOTE: {
      actions: assign(({ context, event }) => ({
        originalNote: event.note,
        ...computeDerivedValues(event.note, context.instrument1, context.instrument2),
      })),
    },
    SET_INSTRUMENT1: {
      actions: assign(({ context, event }) => ({
        instrument1: event.instrument,
        ...computeDerivedValues(context.originalNote, event.instrument, context.instrument2),
      })),
    },
    SET_INSTRUMENT2: {
      actions: assign(({ context, event }) => ({
        instrument2: event.instrument,
        ...computeDerivedValues(context.originalNote, context.instrument1, event.instrument),
      })),
    },
    CLEAR_INSTRUMENT1: {
      actions: assign(({ context }) => ({
        instrument1: undefined,
        ...computeDerivedValues(context.originalNote, undefined, context.instrument2),
      })),
    },
    CLEAR_INSTRUMENT2: {
      actions: assign(({ context }) => ({
        instrument2: undefined,
        ...computeDerivedValues(context.originalNote, context.instrument1, undefined),
      })),
    },
    SET_SELECTED_SCALE: {
      actions: assign(({ event }) => ({
        selectedScale: event.value,
      })),
    },
    SET_SELECTED_CHORD: {
      actions: assign(({ event }) => ({
        selectedChord: event.value,
      })),
    },
    SET_CUSTOM_NOTATION: {
      actions: assign(({ event }) => ({
        customNotation: event.value,
      })),
    },
  },
});
