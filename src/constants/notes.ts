import { Note } from '@/types';

export const noteAbcNotationMap = {
  gFlat: 'G',
  dFlat: 'D',
  aFlat: 'A',
  eFlat: 'E',
  bFlat: 'B',
};

export const notes = [
  {
    position: 0,
    note: 'c',
    display: 'C',
  },
  {
    position: 1,
    note: 'g',
    display: 'G',
  },
  {
    position: 2,
    note: 'd',
    display: 'D',
  },
  {
    position: 3,
    note: 'a',
    display: 'A',
  },
  {
    position: 4,
    note: 'e',
    display: 'E',
  },
  {
    position: 5,
    note: 'b',
    display: 'B',
  },
  {
    position: 6,
    note: 'gFlat',
    displayFlat: 'G',
    displaySharp: 'F',
  },
  {
    position: 7,
    note: 'dFlat',
    displayFlat: 'D',
    displaySharp: 'C',
  },
  {
    position: 8,
    note: 'aFlat',
    displayFlat: 'A',
    displaySharp: 'G',
  },
  {
    position: 9,
    note: 'eFlat',
    displayFlat: 'E',
    displaySharp: 'D',
  },
  {
    position: 10,
    note: 'bFlat',
    displayFlat: 'B',
    displaySharp: 'A',
  },
  {
    position: 11,
    note: 'f',
    display: 'F',
  },
] as Note[];

/**
 * Find a note by its note identifier (e.g., 'c', 'bFlat', 'gFlat')
 */
export const getNoteByIdentifier = (identifier: string): Note | undefined => {
  return notes.find((note) => note.note === identifier);
};
