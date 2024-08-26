const SEMITONES_STEP = 7;
const FULL_CIRCLE = 12;

export function transposeNoteSemitones(originalNote: number, transposedNote: number) {
  let transposeSemitones;

  const startingSemitones = ((transposedNote - originalNote) * SEMITONES_STEP)

  if (transposedNote === originalNote) {
    transposeSemitones = 0;
  } if (startingSemitones > FULL_CIRCLE) {
    // console.log('over 12');
    transposeSemitones = startingSemitones - FULL_CIRCLE;
  } else {
    transposeSemitones = startingSemitones;
  }
  // console.log({ originalNote, transposedNote, startingSemitones, transposeSemitones });

  return transposeSemitones;
}
