export type ScaleNotes =
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'a'
  | 'b'
  | 'c'
  | 'eFlat'
  | 'dFlat'
  | 'gFlat'
  | 'bFlat'
  | 'dFlat'
  | 'aFlat'
  | 'gFlat';

export type ScaleConfig = {
  notes: ScaleNotes[];
  key: string;
};

export type Key = 'eFlat' | 'bFlat' | 'c' | 'f';

export type Option = {
  value: string;
  label: string;
};

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
  siblingNote?: {
    [key: string]: 'displaySharp' | 'displayFlat';
  };
};
