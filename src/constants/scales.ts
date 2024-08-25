import { ScaleConfig } from '../types';

type Scales = {
  major: ScaleConfig;
  minor: ScaleConfig;
  majorPentatonic: ScaleConfig;
  minorPentatonic: ScaleConfig;
  bluesMinor: ScaleConfig;
  bluesMajor: ScaleConfig;
  dorian: ScaleConfig;
  phyrygian: ScaleConfig;
  lydian: ScaleConfig;
  mixolydian: ScaleConfig;
  locrian: ScaleConfig;
  gypsy: ScaleConfig;
  bhairav: ScaleConfig;
  marwa: ScaleConfig;
  purvi: ScaleConfig;
  todi: ScaleConfig;
};

export const scales = {
  major: {
    notes: ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'c'],
    key: 'C',
  },
  minor: {
    notes: ['c', 'd', 'eFlat', 'f', 'g', 'aFlat', 'bFlat', 'c'],
    key: 'Eb',
  },
  majorPentatonic: {
    notes: ['c', 'd', 'e', 'g', 'a', 'c'],
    key: 'C',
  },
  minorPentatonic: {
    notes: ['c', 'eFlat', 'f', 'g', 'bFlat', 'c'],
    key: 'Bb',
  },
  bluesMinor: {
    notes: ['c', 'eFlat', 'f', 'gFlat', 'g', 'bFlat', 'c'],
    key: 'Eb',
  },
  bluesMajor: {
    notes: ['c', 'd', 'eFlat', 'e', 'g', 'a', 'c'],
    key: 'F',
  },
  dorian: {
    notes: ['c', 'd', 'eFlat', 'f', 'g', 'a', 'bFlat', 'c'],
    key: 'Bb',
  },
  phyrygian: {
    notes: ['c', 'dFlat', 'eFlat', 'f', 'g', 'aFlat', 'bFlat', 'c'],
    key: 'Ab',
  },
  lydian: {
    notes: ['c', 'd', 'e', 'gFlat', 'g', 'a', 'b', 'c'],
    key: 'F',
  },
  mixolydian: {
    notes: ['c', 'd', 'e', 'f', 'g', 'a', 'bFlat', 'c'],
    key: 'F',
  },
  locrian: {
    notes: ['c', 'dFlat', 'eFlat', 'f', 'gFlat', 'aFlat', 'bFlat', 'c'],
    key: 'Db',
  },
  gypsy: {
    notes: ['c', 'dFlat', 'e', 'f', 'g', 'aFlat', 'bFlat', 'c'],
    key: 'Eb',
  },
  bhairav: {
    notes: ['c', 'dFlat', 'e', 'f', 'g', 'aFlat', 'b', 'c'],
    key: 'Bb',
  },
  marwa: {
    notes: ['c', 'dFlat', 'e', 'gFlat', 'g', 'a', 'b', 'c'],
    key: 'Bb',
  },
  purvi: {
    notes: ['c', 'dFlat', 'e', 'gFlat', 'g', 'aFlat', 'b', 'c'],
    key: 'Eb',
  },
  todi: {
    notes: ['c', 'dFlat', 'eFlat', 'gFlat', 'g', 'aFlat', 'b', 'c'],
    key: 'Ab',
  },
} as Scales;

export type Scale = keyof Scales;
