// Maps circle of fifths positions to semitones from C
const circleFifthsSemitoneMap = {
  0: 0, // C
  1: 7, // G
  2: 2, // D
  3: -3, // A
  4: 4, // E
  5: -1, // B
  6: 6, // F#/Gb
  7: 1, // Db
  8: 8, // Ab
  9: 3, // Eb
  10: -2, // Bb
  11: 5, // F
};

const FULL_CIRCLE = 12;

/**
 * Converts a circle of fifths position to semitones from C.
 * Used for ABCJS notation rendering which requires semitone transposition.
 *
 * @param position - Circle of fifths position (0-11)
 * @returns Number of semitones from C (can be negative)
 *
 * @example
 * circleFifthsPositionToSemitones(1) // 7 (G is 7 semitones above C)
 * circleFifthsPositionToSemitones(3) // -3 (A is 9 semitones above C, represented as -3)
 */
export function circleFifthsPositionToSemitones(position: number): number {
  // Normalize position to 0-11 range
  let normalizedPosition = position % FULL_CIRCLE;

  if (normalizedPosition < 0) {
    normalizedPosition += FULL_CIRCLE;
  }

  // Convert -0 to 0
  normalizedPosition = normalizedPosition === 0 ? 0 : normalizedPosition;

  return circleFifthsSemitoneMap[
    normalizedPosition as keyof typeof circleFifthsSemitoneMap
  ];
}
