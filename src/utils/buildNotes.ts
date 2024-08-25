import { notes } from '../constants/notes';
import findNotePosition from './findNotePosition';

export default function buildNotes(scale) {
  let mapScale = scale;

  if (typeof scale[0] === 'string') {
    mapScale = scale.notes.map((note) => findNotePosition(note));
  }

  return mapScale.map((note) => notes[note - 1]);
}
