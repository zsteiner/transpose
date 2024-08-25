import { Note } from '@/types';

export default function writeNotation(scale: Note[]) {
  return scale.map((note) => note).join('');
}
