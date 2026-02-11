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
    notes: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'c'],
    key: 'Cm',
  },
  majorPentatonic: {
    notes: ['C', 'D', 'E', 'G', 'A', 'c'],
    key: 'C',
  },
  minorPentatonic: {
    notes: ['C', 'Eb', 'F', 'G', 'Bb', 'c'],
    key: 'Cm',
  },
  bluesMinor: {
    notes: ['C', 'Eb', 'F', 'Gb', 'G', 'Bb', 'c'],
    key: 'Cm',
  },
  bluesMajor: {
    notes: ['C', 'D', 'Eb', 'E', 'G', 'A', 'c'],
    key: 'C',
  },
  dorian: {
    notes: ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb', 'c'],
    key: 'CDor',
  },
  phyrygian: {
    notes: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb', 'c'],
    key: 'CPhr',
  },
  lydian: {
    notes: ['C', 'D', 'E', 'Gb', 'G', 'A', 'B', 'c'],
    key: 'CLyd',
  },
  mixolydian: {
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'Bb', 'c'],
    key: 'CMix',
  },
  locrian: {
    notes: ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'c'],
    key: 'CLoc',
  },
  gypsy: {
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'Bb', 'c'],
    key: 'CPhr',
  },
  doubleHarmonic: {
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'B', 'c'],
    key: 'C',
  },
  bhairav: {
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'B', 'c'],
    key: 'C',
  },
  marwa: {
    notes: ['C', 'Db', 'E', 'Gb', 'G', 'A', 'B', 'c'],
    key: 'CLyd',
  },
  purvi: {
    notes: ['C', 'Db', 'E', 'Gb', 'G', 'Ab', 'B', 'c'],
    key: 'CLyd',
  },
  todi: {
    notes: ['C', 'Db', 'Eb', 'Gb', 'G', 'Ab', 'B', 'c'],
    key: 'CPhr',
  },
} as Scales;

export type Scale = keyof Scales;
