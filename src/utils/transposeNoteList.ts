import { notes } from '@/constants/notes';
import { Note } from '@/types';
import { transposeNote } from './transposeNote';

/**
 * Transposes a list of note identifiers by a given transpose factor.
 *
 * @param noteIdentifiers - Array of note identifier strings (e.g., ['c', 'd', 'eFlat'])
 * @param transposeFactor - Number of steps to transpose on the circle of fifths
 * @returns Array of Note objects after transposition
 *
 * @example
 * // Transpose ['C', 'E', 'G'] up by 2 steps (to D major chord)
 * transposeNoteList(['c', 'e', 'g'], 2)
 * // Returns [Note for D, Note for F#, Note for A]
 */
export function transposeNoteList(
  noteIdentifiers: string[],
  transposeFactor: number,
): Note[] {
  return noteIdentifiers.map((identifier) => {
    // Find the original note by identifier (case-insensitive)
    const originalNote = notes.find(
      (note) => note.note.toLowerCase() === identifier.toLowerCase(),
    );

    // Default to C if not found
    const notePosition = originalNote?.position ?? 0;

    // Calculate transposed position
    const transposedPosition = transposeNote(notePosition, transposeFactor);

    // Return the transposed note object
    return notes[transposedPosition];
  });
}
