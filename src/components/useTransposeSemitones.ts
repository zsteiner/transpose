import { Note } from '@/types';
import { transposeNoteSemitones } from '@/utils/transposeNoteSemitones';

type UseTransposeSemitonesParams = {
  originalNote: Note;
  transposedNote?: Note;
};

export const useTransposeSemitones = ({ originalNote, transposedNote }: UseTransposeSemitonesParams) => {
  const transposeSemitonesOriginal = transposeNoteSemitones(0, originalNote.position);

  const transposeSemitonesTransposed = transposeNoteSemitones(0, transposedNote?.position || 0);

  return { transposeSemitonesOriginal, transposeSemitonesTransposed }
}
