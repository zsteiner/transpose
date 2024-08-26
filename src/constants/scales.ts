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
    notes: ['C', 'D', 'D', 'F', 'G', 'A', 'B', 'c'],
    key: 'C',
  },
  minor: {
    notes: ['C', 'D', 'E', 'F', 'G', '_A', '_B', 'c'],
    key: 'Eb',
  },
  majorPentatonic: {
    notes: ['C', 'D', 'E', 'G', 'A', 'c'],
    key: 'C',
  },
  minorPentatonic: {
    notes: ['C', '_E', 'F', 'G', '_B', 'c'],
    key: 'Bb',
  },
  bluesMinor: {
    notes: ['C', '_E', 'F', '_G', 'G', '_B', 'c'],
    key: 'Eb',
  },
  bluesMajor: {
    notes: ['C', 'D', '_E', 'E', 'G', 'A', 'c'],
    key: 'F',
  },
  dorian: {
    notes: ['C', 'D', '_E', 'F', 'G', 'A', '_B', 'c'],
    key: 'Bb',
  },
  phyrygian: {
    notes: ['C', '_D', '_E', 'F', 'G', '_A', '_B', 'c'],
    key: 'Ab',
  },
  lydian: {
    notes: ['C', 'D', 'E', '_G', 'G', 'A', 'B', 'c'],
    key: 'F',
  },
  mixolydian: {
    notes: ['C', 'D', 'E', 'F', 'G', 'A', '_B', 'c'],
    key: 'F',
  },
  locrian: {
    notes: ['C', '_D', '_E', 'F', '_G', '_A', '_B', 'c'],
    key: 'Db',
  },
  gypsy: {
    notes: ['C', '_D', 'E', 'F', 'G', '_A', '_B', 'c'],
    key: 'Eb',
  },
  bhairav: {
    notes: ['C', '_D', 'E', 'F', 'G', '_A', 'B', 'c'],
    key: 'Bb',
  },
  marwa: {
    notes: ['C', '_D', 'E', '_G', 'G', 'A', 'B', 'c'],
    key: 'Bb',
  },
  purvi: {
    notes: ['C', '_D', 'E', '_G', 'G', '_A', 'B', 'c'],
    key: 'Eb',
  },
  todi: {
    notes: ['C', '_D', '_E', '_G', 'G', '_A', 'B', 'c'],
    key: 'Ab',
  },
} as Scales;

export type Scale = keyof Scales;
