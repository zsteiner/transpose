import transposeNotes from './transposeNotes';
import findNotePosition from './findNotePosition';
import buildNotes from './buildNotes';

export default function transposeScale(scale, transposeFactor) {
  const transposedScale = scale.map((note) => {
    const transposedNote = transposeNotes(
      findNotePosition(note),
      transposeFactor,
    );
    return transposedNote;
  });
  const builtScale = buildNotes(transposedScale);
  return builtScale;
}
