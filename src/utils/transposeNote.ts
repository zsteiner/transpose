const FULL_CIRCLE = 12;

export function transposeNote(originalNote: number, transposeFactor: number) {
  let transposedNote;

  const adjustedTransposeFactor = transposeFactor + 1;

  if (transposeFactor === 0) {
    transposedNote = originalNote;
  } else if (originalNote + adjustedTransposeFactor <= 0) {
    transposedNote = originalNote + adjustedTransposeFactor + FULL_CIRCLE;
  } else if (originalNote + adjustedTransposeFactor > FULL_CIRCLE) {
    transposedNote = originalNote + adjustedTransposeFactor - FULL_CIRCLE;
  } else {
    transposedNote = originalNote + adjustedTransposeFactor;
  }

  return transposedNote;
}
