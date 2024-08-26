import { notes as notesMap } from '@/constants/notes';

import { Note } from '../TransposeNote/Note';
import styles from './NotesDisplay.module.css';

type NotesDisplayProps = {
  notes: string[];
};

export const NotesDisplay = ({ notes }: NotesDisplayProps) => {
  return (
    <div className={styles.notes}>
      <strong>Notes: </strong>
      {notes.map((note) => {
        const noteObject = notesMap.find((noteObject) => noteObject.note.toLowerCase() === note.toLowerCase());
        console.log({ noteObject });
        return (
          <Note key={note} note={noteObject} showBothAccidentals />
        )
      })}
    </div>
  );
}
