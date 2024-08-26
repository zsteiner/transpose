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
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'c'],
    key: 'C',
  },
  minor: {
    notes: ['C', 'D', 'E', 'F', 'G', 'aFlat', 'bFlat', 'c'],
    key: 'Eb',
  },
  majorPentatonic: {
    notes: ['C', 'D', 'E', 'G', 'A', 'c'],
    key: 'C',
  },
  minorPentatonic: {
    notes: ['C', 'eFlat', 'F', 'G', 'bFlat', 'c'],
    key: 'Bb',
  },
  bluesMinor: {
    notes: ['C', 'eFlat', 'F', 'gFlat', 'G', 'bFlat', 'c'],
    key: 'Eb',
  },
  bluesMajor: {
    notes: ['C', 'D', 'eFlat', 'E', 'G', 'A', 'c'],
    key: 'F',
  },
  dorian: {
    notes: ['C', 'D', 'eFlat', 'F', 'G', 'A', 'bFlat', 'c'],
    key: 'Bb',
  },
  phyrygian: {
    notes: ['C', 'dFlat', 'eFlat', 'F', 'G', 'aFlat', 'bFlat', 'c'],
    key: 'Ab',
  },
  lydian: {
    notes: ['C', 'D', 'E', 'gFlat', 'G', 'A', 'B', 'c'],
    key: 'F',
  },
  mixolydian: {
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'bFlat', 'c'],
    key: 'F',
  },
  locrian: {
    notes: ['C', 'dFlat', 'eFlat', 'F', 'gFlat', 'aFlat', 'bFlat', 'c'],
    key: 'Db',
  },
  gypsy: {
    notes: ['C', 'dFlat', 'E', 'F', 'G', 'aFlat', 'bFlat', 'c'],
    key: 'Eb',
  },
  bhairav: {
    notes: ['C', 'dFlat', 'E', 'F', 'G', 'aFlat', 'B', 'c'],
    key: 'Bb',
  },
  marwa: {
    notes: ['C', 'dFlat', 'E', 'gFlat', 'G', 'A', 'B', 'c'],
    key: 'Bb',
  },
  purvi: {
    notes: ['C', 'dFlat', 'E', 'gFlat', 'G', 'aFlat', 'B', 'c'],
    key: 'Eb',
  },
  todi: {
    notes: ['C', 'dFlat', 'eFlat', 'gFlat', 'G', 'aFlat', 'B', 'c'],
    key: 'Ab',
  },
} as Scales;

export type Scale = keyof Scales;
