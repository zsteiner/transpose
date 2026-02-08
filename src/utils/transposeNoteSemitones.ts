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

const FULL_CIRCLE = 12;

export function transposeNoteSemitones(
  originalNote: number,
  transposedNote: number,
) {
  let stepsMoved = transposedNote - originalNote;

  // Wrap stepsMoved to be within 0-11 range using modulo arithmetic
  stepsMoved = stepsMoved % FULL_CIRCLE;

  // Handle negative results by adding FULL_CIRCLE
  if (stepsMoved < 0) {
    stepsMoved += FULL_CIRCLE;
  }

  // Convert -0 to 0 (JavaScript quirk)
  stepsMoved = stepsMoved === 0 ? 0 : stepsMoved;

  const semitones =
    circleFifthsSemitoneMap[stepsMoved as keyof typeof circleFifthsSemitoneMap];

  return semitones;
}
