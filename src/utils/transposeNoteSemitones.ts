const circleFifthsSemitoneMap = {
  0: 0, // C
  1: 7, // G
  2: 2, // D
  3: -3, // A
  4: 4, // E
  5: -1, // B
  6: 6, // F#
  7: 1, // Db
  8: 8, // Ab
  9: 3, // Eb
  10: -2, // Bb
  11: 5, // F
};

export function transposeNoteSemitones(
  originalNote: number,
  transposedNote: number,
) {
  const stepsMoved = transposedNote - originalNote;
  const semitones =
    circleFifthsSemitoneMap[stepsMoved as keyof typeof circleFifthsSemitoneMap];

  return semitones;
}
