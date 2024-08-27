const circleFifthsSemitoneMap = {
  0: 0,
  1: 7,
  2: 2,
  3: 9,
  4: 4,
  5: -1,
  6: 6,
  7: 1,
  8: 8,
  9: 3,
  10: -2,
  11: 5,
};

export function transposeNoteSemitones(originalNote: number, transposedNote: number) {
  const stepsMoved = transposedNote - originalNote;
  const semitones = circleFifthsSemitoneMap[stepsMoved as keyof typeof circleFifthsSemitoneMap];

  return semitones;
}
