import { ScaleNotes } from '../types';

type Scales = {
  major: ScaleNotes[];
  minor: ScaleNotes[];
  majorPentatonic: ScaleNotes[];
  minorPentatonic: ScaleNotes[];
  bluesMinor: ScaleNotes[];
  bluesMajor: ScaleNotes[];
  dorian: ScaleNotes[];
  phyrygian: ScaleNotes[];
  lydian: ScaleNotes[];
  mixolydian: ScaleNotes[];
  locrian: ScaleNotes[];
  gypsy: ScaleNotes[];
  bhairav: ScaleNotes[];
  marwa: ScaleNotes[];
  purvi: ScaleNotes[];
  todi: ScaleNotes[];
};

export const scales = {
  major: ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'c'],
  minor: ['c', 'd', 'eFlat', 'f', 'g', 'aFlat', 'bFlat', 'c'],
  majorPentatonic: ['c', 'd', 'e', 'g', 'a', 'c'],
  minorPentatonic: ['c', 'eFlat', 'f', 'g', 'bFlat', 'c'],
  bluesMinor: ['c', 'eFlat', 'f', 'gFlat', 'g', 'bFlat', 'c'],
  bluesMajor: ['c', 'd', 'eFlat', 'e', 'g', 'a', 'c'],
  dorian: ['c', 'd', 'eFlat', 'f', 'g', 'a', 'bFlat', 'c'],
  phyrygian: ['c', 'dFlat', 'eFlat', 'f', 'g', 'aFlat', 'bFlat', 'c'],
  lydian: ['c', 'd', 'e', 'gFlat', 'g', 'a', 'b', 'c'],
  mixolydian: ['c', 'd', 'e', 'f', 'g', 'a', 'bFlat', 'c'],
  locrian: ['c', 'dFlat', 'eFlat', 'f', 'gFlat', 'aFlat', 'bFlat', 'c'],
  gypsy: ['c', 'dFlat', 'e', 'f', 'g', 'aFlat', 'bFlat', 'c'],
  bhairav: ['c', 'dFlat', 'e', 'f', 'g', 'aFlat', 'b', 'c'],
  marwa: ['c', 'dFlat', 'e', 'gFlat', 'g', 'a', 'b', 'c'],
  purvi: ['c', 'dFlat', 'e', 'gFlat', 'g', 'aFlat', 'b', 'c'],
  todi: ['c', 'dFlat', 'eFlat', 'gFlat', 'g', 'aFlat', 'b', 'c'],
} as Scales;

export type Scale = keyof Scales;
