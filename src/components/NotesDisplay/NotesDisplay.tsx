import classnames from 'classnames';

import { notes as notesMap } from '@/constants/notes';
import { Container } from '@/types';
import { transposeNote } from '@/utils/transposeNote';

import { Note } from '../Note';
import { useTransposeState } from '../useTranspose';
import styles from './NotesDisplay.module.css';

type NotesDisplayProps = Container & {
  className?: string;
  isTransposed?: boolean;
  notes: string[];
};

export const NotesDisplay = ({
  className,
  isTransposed,
  notes,
}: NotesDisplayProps) => {
  const { originalNote, transposedNote } = useTransposeState();

  const label = isTransposed ? 'Transposed' : 'Original';

  return (
    <div className={classnames(styles.notesContainer, className)}>
      <strong>{label}:</strong>
      <div className={styles.notes}>
        {notes.map((note) => {
          const noteObject =
            notesMap.find(
              (noteObject) =>
                noteObject.note.toLowerCase() === note.toLowerCase(),
            ) || notesMap[0];

          if (isTransposed) {
            const displayNote =
              notesMap[
                transposeNote(
                  noteObject.position,
                  transposedNote?.position ?? 0,
                )
              ] || notesMap[0];

            return (
              <Note
                className={styles.note}
                key={note}
                note={displayNote}
                showBothAccidentals
              />
            );
          }

          const displayNote =
            notesMap[
              transposeNote(noteObject.position, originalNote.position)
            ] || notesMap[0];

          return (
            <Note
              className={styles.note}
              key={note}
              note={displayNote}
              showBothAccidentals
            />
          );
        })}
      </div>
    </div>
  );
};
