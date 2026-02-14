import { Note } from '@/types';
import { transposeNoteList } from '@/utils/transposeNoteList';

type UseTransposedNotesParams = {
  noteIdentifiers: string[];
  transposeFactor: number;
};

/**
 * Hook that transposes a list of note identifiers by a given factor.
 * Returns array of Note objects.
 *
 * @param noteIdentifiers - Array of note identifier strings
 * @param transposeFactor - Number of steps to transpose on circle of fifths
 * @returns Array of transposed Note objects
 *
 * @example
 * // In a component:
 * const { transposeFactor } = useTranspose();
 * const transposedNotes = useTransposedNotes({
 *   noteIdentifiers: ['c', 'e', 'g'],
 *   transposeFactor
 * });
 */
export function useTransposedNotes({
  noteIdentifiers,
  transposeFactor,
}: UseTransposedNotesParams): Note[] {
  return transposeNoteList(noteIdentifiers, transposeFactor);
}
