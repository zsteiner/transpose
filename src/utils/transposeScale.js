import transposeNotes from './transposeNotes';
import findNotePosition from '../utils/findNotePosition';
import writeNotation from '../utils/writeNotation';

export default function(scale, transposeFactor) {
  let transposedNotation;
  const transposedScale = scale.map(note => {
    const transposedNote = transposeNotes(
      findNotePosition(note),
      transposeFactor,
    );
    return transposedNote;
  });
  transposedNotation = writeNotation(transposedScale);
  // transposedNotation = transposedScale;
  return transposedNotation;
}
