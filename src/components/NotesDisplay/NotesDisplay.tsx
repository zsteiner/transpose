import classnames from 'classnames';

import { Container } from '@/types';

import { Note } from '../Note';
import { useTranspose } from '../useTranspose';
import { useTransposedNotes } from '../useTransposedNotes';
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
  const { originalNote, transposedNote } = useTranspose();

  // Calculate the appropriate transpose factor based on whether we're showing
  // original or transposed notes
  const displayTransposeFactor = isTransposed
    ? transposedNote?.position ?? 0
    : originalNote.position;

  // Use the hook to get transposed notes
  const displayNotes = useTransposedNotes({
    noteIdentifiers: notes,
    transposeFactor: displayTransposeFactor,
  });

  const label = isTransposed ? 'Transposed' : 'Original';

  return (
    <div className={classnames(styles.notesContainer, className)}>
      <strong>{label}:</strong>
      <div className={styles.notes}>
        {displayNotes.map((note, index) => (
          <Note
            className={styles.note}
            key={`${notes[index]}-${index}`}
            note={note}
            showBothAccidentals
          />
        ))}
      </div>
    </div>
  );
};
