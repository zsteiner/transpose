import transposeNotes from './transposeNotes';
import findNotePosition from '../utils/findNotePosition';
import buildNotes from '../utils/buildNotes';

export default function(scale, transposeFactor) {
  const transposedScale = scale.map(note => {
    const transposedNote = transposeNotes(
      findNotePosition(note),
      transposeFactor,
    );
    return transposedNote;
  });
  const builtScale = buildNotes(transposedScale);
  return builtScale;
}
