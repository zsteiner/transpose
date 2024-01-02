export type Scale = 'major' | 'minor' | 'majorPentatonic' | 'minorPentatonic' | 'bluesMinor' | 'bluesMajor' | 'dorian' | 'phyrygian' | 'lydian' | 'mixolydian' | 'locrian' | 'gypsy' | 'bhairav' | 'marwa' | 'purvi' | 'todi';

export type ScaleNotes = 'c' | 'd' | 'e' | 'f' | 'g' | 'a' | 'b' | 'c' | 'eFlat' | 'dFlat' | 'gFlat' | 'bFlat' | 'dFlat' | 'aFlat' | 'gFlat';

export type Key = 'eFlat' | 'bFlat' | 'c' | 'f';

export type Option = {
  value: string;
  label: string;
}

export type Instrument = {
  name: string;
  key: Key;
  transposeFactor: number;
  icon: boolean;
  iconName: string;
};

export type Note = {
  position: number;
  note: string;
  display: string;
  displayFlat?: string;
  displaySharp?: string;
  previousNote?: {
    [key: string]: 'displaySharp' | 'displayFlat';
  };
};