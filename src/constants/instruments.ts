import { Instrument } from '@/types';

type InstrumentList = {
  [key: string]: Instrument;
};

export const instruments = {
  piano: {
    name: 'piano',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'piano',
  },
  altoClarinet: {
    name: 'alto clarinet',
    key: 'eFlat',
    transposeFactor: 3,
    icon: false,
    iconName: 'altoClarinet',
  },
  altoSax: {
    name: 'alto sax',
    key: 'eFlat',
    transposeFactor: 3,
    icon: true,
    iconName: 'altoSax',
  },
  bariSax: {
    name: 'baritone sax',
    key: 'eFlat',
    transposeFactor: 3,
    icon: true,
    iconName: 'bariSax',
  },
  baritoneHorn: {
    name: 'baritone horn',
    key: 'bFlat',
    transposeFactor: 2,
    icon: true,
    iconName: 'baritoneHorn',
  },
  bassClarinet: {
    name: 'bass clarinet',
    key: 'bFlat',
    transposeFactor: 2,
    icon: false,
    iconName: 'bass-clarinet',
  },
  cello: {
    name: 'cello',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'cello',
  },
  clarinet: {
    name: 'clarinet',
    key: 'bFlat',
    transposeFactor: 2,
    icon: true,
    iconName: 'clarinet',
  },
  doubleBass: {
    name: 'double bass',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'doubleBass',
  },
  flute: {
    name: 'flute',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'flute',
  },
  guitar: {
    name: 'guitar',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'guitar',
  },
  frenchHorn: {
    name: 'french horn',
    key: 'f',
    transposeFactor: 1,
    icon: true,
    iconName: 'frenchHorn',
  },
  oboe: {
    name: 'oboe',
    key: 'c',
    transposeFactor: 0,
    icon: false,
    iconName: 'oboe',
  },
  sopranoSax: {
    name: 'soprano sax',
    key: 'bFlat',
    transposeFactor: 2,
    icon: true,
    iconName: 'sopranoSax',
  },
  tenorSax: {
    name: 'tenor sax',
    key: 'bFlat',
    transposeFactor: 2,
    icon: true,
    iconName: 'tenorSax',
  },
  trombone: {
    name: 'trombone',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'trombone',
  },
  trumpet: {
    name: 'trumpet',
    key: 'bFlat',
    transposeFactor: 2,
    icon: true,
    iconName: 'trumpet',
  },
  tuba: {
    name: 'tuba',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'tuba',
  },
  viola: {
    name: 'viola',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'viola',
  },
  violin: {
    name: 'violin',
    key: 'c',
    transposeFactor: 0,
    icon: true,
    iconName: 'violin',
  },
} as InstrumentList;

export const instrumentsArray = Object.values(instruments);
