import { transposeNote } from './transposeNote';
import findNotePosition from './findNotePosition';
import buildNotes from './buildNotes';
import { ScaleConfig } from '../types';

export default function transposeScale(scale: ScaleConfig, transposeFactor) {
  const transposedScale = scale.notes.map((note) => {
    const transposedNote = transposeNote(
      findNotePosition(note),
      transposeFactor,
    );
    return transposedNote;
  });

  return buildNotes(transposedScale);
}
