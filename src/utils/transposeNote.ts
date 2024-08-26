const FULL_CIRCLE = 12;

export function transposeNote(originalNote: number, transposeFactor: number) {
  let transposedNote;

  if (originalNote + transposeFactor <= 0) {
    transposedNote = originalNote + transposeFactor + FULL_CIRCLE;
  } else if (originalNote + transposeFactor > FULL_CIRCLE) {
    transposedNote = originalNote + transposeFactor - FULL_CIRCLE;
  } else {
    transposedNote = originalNote + transposeFactor;
  }

  return transposedNote;
}
