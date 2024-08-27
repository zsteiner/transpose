import { notes as notesMap } from '@/constants/notes';
import { transposeNote } from '@/utils/transposeNote';

import { Note } from '../Note';
import { useTransposeState } from '../useTranspose';
import styles from './NotesDisplay.module.css';

type NotesDisplayProps = {
  isTransposed?: boolean;
  notes: string[];
};

export const NotesDisplay = ({ isTransposed, notes }: NotesDisplayProps) => {
  const { originalNote, transposedNote, transposeFactor } = useTransposeState();

  const label = isTransposed ? 'Transposed' : 'Original';

  return (
    <div className={styles.notes}>
      <strong className={styles.label}>{label}:</strong>
      {notes.map((note) => {
        const noteObject = notesMap.find((noteObject) => noteObject.note.toLowerCase() === note.toLowerCase()) || notesMap[0];

        if (isTransposed) {
          const displayNote = notesMap[
            transposeNote(noteObject.position, (transposedNote?.position ?? 0))
          ] || notesMap[0];

          return <Note
            className={styles.note}
            key={note}
            note={displayNote}
            showBothAccidentals
          />
        }

        const displayNote = notesMap[
          transposeNote(noteObject.position, originalNote.position)] || notesMap[0];

        return (
          <Note
            className={styles.note}
            key={note}
            note={displayNote}
            showBothAccidentals
          />
        )
      })}
    </div>
  );
}
