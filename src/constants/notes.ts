import { Note } from "@/types";

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
    previousNote: {
      g: 'displaySharp',
      f: 'displayFlat',
      gFlat: 'displaySharp',
    },
  },
  {
    position: 8,
    note: 'dFlat',
    displayFlat: 'D',
    displaySharp: 'C',
    previousNote: {
      d: 'displaySharp',
      c: 'displayFlat',
      dFlat: 'displaySharp',
    },
  },
  {
    position: 9,
    note: 'aFlat',
    displayFlat: 'A',
    displaySharp: 'G',
    previousNote: {
      a: 'displaySharp',
      g: 'displayFlat',
      gFlat: 'displayFlat',
    },
  },
  {
    position: 10,
    note: 'eFlat',
    displayFlat: 'E',
    displaySharp: 'D',
    previousNote: {
      e: 'displaySharp',
      d: 'displayFlat',
      eFlat: 'displayFlat',
    },
  },
  {
    position: 11,
    note: 'bFlat',
    displayFlat: 'B',
    displaySharp: 'A',
    previousNote: {
      b: 'displaySharp',
      a: 'displayFlat',
      aFlat: 'displayFlat',
    },
  },
  {
    position: 12,
    note: 'f',
    display: 'F',
  },
] as Note[];
