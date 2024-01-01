import { notes } from '../constants/notes';
import findNotePosition from './findNotePosition';

export default function buildNotes(scale) {
  let mapScale = scale;

  if (typeof scale[0] === 'string') {
    mapScale = scale.map((note) => findNotePosition(note));
  }

  const notatedScale = mapScale.map((note) => notes[note - 1]);
  return notatedScale;
}
