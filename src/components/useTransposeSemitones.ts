import { Note } from '@/types';
import { transposeNoteSemitones } from '@/utils/transposeNoteSemitones';

type UseTransposeSemitonesParams = {
  originalNote: Note;
  transposedNote?: Note;
};

export const useTransposeSemitones = ({ originalNote, transposedNote }: UseTransposeSemitonesParams) => {
  const transposeSemitonesOriginal = transposeNoteSemitones(1, originalNote.position);

  const transposeSemitonesTransposed = transposeNoteSemitones(1, transposedNote?.position || 1);

  return { transposeSemitonesOriginal, transposeSemitonesTransposed };
}