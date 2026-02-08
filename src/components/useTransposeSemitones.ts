import { useMemo } from 'react';

import { Note } from '@/types';
import { transposeNoteSemitones } from '@/utils/transposeNoteSemitones';

type UseTransposeSemitonesParams = {
  originalNote: Note;
  transposedNote?: Note;
};

export const useTransposeSemitones = ({
  originalNote,
  transposedNote,
}: UseTransposeSemitonesParams) => {
  const transposeSemitonesOriginal = useMemo(
    () => transposeNoteSemitones(0, originalNote.position),
    [originalNote.position],
  );

  const transposeSemitonesTransposed = useMemo(
    () => transposeNoteSemitones(0, transposedNote?.position || 0),
    [transposedNote?.position],
  );

  return { transposeSemitonesOriginal, transposeSemitonesTransposed };
};
