import { circleFifthsPositionToSemitones } from './circleFifthsPositionToSemitones';

/**
 * @deprecated Use circleFifthsPositionToSemitones instead.
 * This function always receives 0 as the first parameter in practice.
 *
 * Transposes from originalNote to transposedNote and returns semitone difference.
 * In practice, originalNote is always 0 (C), so this is equivalent to
 * circleFifthsPositionToSemitones(transposedNote).
 */
export function transposeNoteSemitones(
  originalNote: number,
  transposedNote: number,
): number {
  const stepsMoved = transposedNote - originalNote;
  return circleFifthsPositionToSemitones(stepsMoved);
}
