import { useMemo } from 'react';

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
  const transposeSemitonesOriginal = useMemo(
    () => circleFifthsPositionToSemitones(originalNote.position),
    [originalNote.position],
  );

  const transposeSemitonesTransposed = useMemo(
    () => circleFifthsPositionToSemitones(transposedNote?.position || 0),
    [transposedNote?.position],
  );

  return { transposeSemitonesOriginal, transposeSemitonesTransposed };
};
