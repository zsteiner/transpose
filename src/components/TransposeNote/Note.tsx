import { Note as NoteType } from '@/types';

import styles from './TransposeNote.module.css';

type NoteProps = {
  note?: NoteType;
  showBothAccidentals?: boolean;
};

type NoteAccidentalProps = {
  note?: string;
  type: 'sharp' | 'flat';
};

const NoteAccidental = ({ note, type }: NoteAccidentalProps) => {
  const label = type === 'sharp' ? ' ♯' : '♭';

  return (
    <span>
      {note}
      <span className={styles.accidental}>
        {label}
      </span>
    </span>
  );
}

export const Note = ({ note, showBothAccidentals }: NoteProps) => {
  const isAccidental = note?.displayFlat || note?.displaySharp;
  const sharpLabel = '♯'
  const flatLabel = '♭';

  return (
    <span>
      {note?.display}
      {isAccidental ?
        <>
          <NoteAccidental note={note?.displaySharp} type="sharp" />
          {showBothAccidentals ? <>
            {' '} / {' '}
            < NoteAccidental note={note?.displayFlat} type="flat" /></> : null}
        </> : null
      }
    </span>
  );
}
