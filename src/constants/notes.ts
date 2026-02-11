import { Note } from '@/types';

export const notes = [
  {
    position: 0,
    note: 'C',
    display: 'C',
  },
  {
    position: 1,
    note: 'G',
    display: 'G',
  },
  {
    position: 2,
    note: 'D',
    display: 'D',
  },
  {
    position: 3,
    note: 'A',
    display: 'A',
  },
  {
    position: 4,
    note: 'E',
    display: 'E',
  },
  {
    position: 5,
    note: 'B',
    display: 'B',
  },
  {
    position: 6,
    note: 'Gb',
    displayFlat: 'G',
    displaySharp: 'F',
  },
  {
    position: 7,
    note: 'Db',
    displayFlat: 'D',
    displaySharp: 'C',
  },
  {
    position: 8,
    note: 'Ab',
    displayFlat: 'A',
    displaySharp: 'G',
  },
  {
    position: 9,
    note: 'Eb',
    displayFlat: 'E',
    displaySharp: 'D',
  },
  {
    position: 10,
    note: 'Bb',
    displayFlat: 'B',
    displaySharp: 'A',
  },
  {
    position: 11,
    note: 'F',
    display: 'F',
  },
] as Note[];

/**
 * Find a note by its ABC identifier (e.g., 'C', 'Bb', 'Gb')
 */
export const getNoteByIdentifier = (identifier: string): Note | undefined => {
  return notes.find((note) => note.note === identifier);
};
