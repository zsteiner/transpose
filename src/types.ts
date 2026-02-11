export type Container = {
  className?: string;
  children?: React.ReactNode;
};

export type ScaleNotes =
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'A'
  | 'B'
  | 'Eb'
  | 'Db'
  | 'Gb'
  | 'Bb'
  | 'Ab';

export type ScaleConfig = {
  notes: string[];
  key: string;
};

export type Key = 'Eb' | 'Bb' | 'C' | 'F';

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
