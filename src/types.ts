export type Container = {
  className?: string;
  children?: React.ReactNode;
}

export type Key = 'eFlat' | 'bFlat' | 'c' | 'f';

export type Instrument = {
  name: string;
  key: Key;
  transposeFactor: number;
  icon: boolean;
  iconName: string;
} | null;
