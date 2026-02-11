import { Instrument } from '@/types';

type InstrumentList = {
  [key: string]: Instrument;
};

export const instruments = {
  piano: {
    name: 'piano',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'piano',
  },
  altoClarinet: {
    name: 'alto clarinet',
    key: 'Eb',
    transposeFactor: 3,
    icon: false,
    iconName: 'altoClarinet',
  },
  altoSax: {
    name: 'alto sax',
    key: 'Eb',
    transposeFactor: 3,
    icon: true,
    iconName: 'altoSax',
  },
  bariSax: {
    name: 'baritone sax',
    key: 'Eb',
    transposeFactor: 3,
    icon: true,
    iconName: 'bariSax',
  },
  baritoneHorn: {
    name: 'baritone horn',
    key: 'Bb',
    transposeFactor: 2,
    icon: true,
    iconName: 'baritoneHorn',
  },
  bassClarinet: {
    name: 'bass clarinet',
    key: 'Bb',
    transposeFactor: 2,
    icon: false,
    iconName: 'bass-clarinet',
  },
  cello: {
    name: 'cello',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'cello',
  },
  clarinet: {
    name: 'clarinet',
    key: 'Bb',
    transposeFactor: 2,
    icon: true,
    iconName: 'clarinet',
  },
  doubleBass: {
    name: 'double bass',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'doubleBass',
  },
  flute: {
    name: 'flute',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'flute',
  },
  guitar: {
    name: 'guitar',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'guitar',
  },
  frenchHorn: {
    name: 'french horn',
    key: 'F',
    transposeFactor: 1,
    icon: true,
    iconName: 'frenchHorn',
  },
  oboe: {
    name: 'oboe',
    key: 'C',
    transposeFactor: 0,
    icon: false,
    iconName: 'oboe',
  },
  sopranoSax: {
    name: 'soprano sax',
    key: 'Bb',
    transposeFactor: 2,
    icon: true,
    iconName: 'sopranoSax',
  },
  tenorSax: {
    name: 'tenor sax',
    key: 'Bb',
    transposeFactor: 2,
    icon: true,
    iconName: 'tenorSax',
  },
  trombone: {
    name: 'trombone',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'trombone',
  },
  trumpet: {
    name: 'trumpet',
    key: 'Bb',
    transposeFactor: 2,
    icon: true,
    iconName: 'trumpet',
  },
  tuba: {
    name: 'tuba',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'tuba',
  },
  viola: {
    name: 'viola',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'viola',
  },
  violin: {
    name: 'violin',
    key: 'C',
    transposeFactor: 0,
    icon: true,
    iconName: 'violin',
  },
} as InstrumentList;

/**
 * Find an instrument by its key (e.g., 'piano', 'clarinet', 'altoSax')
 */
export const getInstrumentByKey = (key: string): Instrument | undefined => {
  return instruments[key];
};
