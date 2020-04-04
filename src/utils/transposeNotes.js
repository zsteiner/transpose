export default function(originalNote, transposeFactor) {
  let transposedNote;
  if (originalNote + transposeFactor <= 0) {
    transposedNote = originalNote + transposeFactor + 12;
  } else if (originalNote + transposeFactor > 12) {
    transposedNote = originalNote + transposeFactor - 12;
  } else {
    transposedNote = originalNote + transposeFactor;
  }
  return transposedNote;
}
