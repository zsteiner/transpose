import transposeNotes from './transposeNotes';
import findNotePosition from './findNotePosition';
import buildNotes from './buildNotes';
import { ScaleNotes } from '../types';

export default function transposeScale(scale: ScaleNotes[], transposeFactor) {
  const transposedScale = scale.map((note) => {
    const transposedNote = transposeNotes(
      findNotePosition(note),
      transposeFactor,
    );
    return transposedNote;
  });

  return buildNotes(transposedScale);
}
