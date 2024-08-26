import { Note } from '@/types';

export const noteAbcNotationMap = {
  gFlat: '_G',
  dFlat: '_D',
  aFlat: '_A',
  eFlat: '_E',
  bFlat: '_B',
};

export const notes = [
  {
    position: 1,
    note: 'c',
    display: 'C',
  },
  {
    position: 2,
    note: 'g',
    display: 'G',
  },
  {
    position: 3,
    note: 'd',
    display: 'D',
  },
  {
    position: 4,
    note: 'a',
    display: 'A',
  },
  {
    position: 5,
    note: 'e',
    display: 'E',
  },
  {
    position: 6,
    note: 'b',
    display: 'B',
  },
  {
    position: 7,
    note: 'gFlat',
    displayFlat: 'G',
    displaySharp: 'F',
  },
  {
    position: 8,
    note: 'dFlat',
    displayFlat: 'D',
    displaySharp: 'C',
  },
  {
    position: 9,
    note: 'aFlat',
    displayFlat: 'A',
    displaySharp: 'G',
  },
  {
    position: 10,
    note: 'eFlat',
    displayFlat: 'E',
    displaySharp: 'D',
  },
  {
    position: 11,
    note: 'bFlat',
    displayFlat: 'B',
    displaySharp: 'A',
  },
  {
    position: 12,
    note: 'f',
    display: 'F',
  },
] as Note[];
