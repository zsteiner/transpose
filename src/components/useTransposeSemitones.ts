import { Note } from '@/types';
import { circleFifthsPositionToSemitones } from '@/utils/circleFifthsPositionToSemitones';

type UseTransposeSemitonesParams = {
  originalNote: Note;
  transposedNote?: Note;
};

/**
 * Hook that converts circle of fifths positions to semitones for ABCJS notation.
 * Used by TransposeNotation component for rendering musical notation.
 */
export const useTransposeSemitones = ({
  originalNote,
  transposedNote,
}: UseTransposeSemitonesParams) => {
  const transposeSemitonesOriginal = circleFifthsPositionToSemitones(
    originalNote.position,
  );

  const transposeSemitonesTransposed = circleFifthsPositionToSemitones(
    transposedNote?.position || 0,
  );

  return { transposeSemitonesOriginal, transposeSemitonesTransposed };
};
