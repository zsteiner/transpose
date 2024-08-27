import classnames from 'classnames';

import { Container, Note as NoteType } from '@/types';

import styles from './Note.module.css';

type NoteProps = Container & {
  note?: NoteType;
  showBothAccidentals?: boolean;
};

type NoteAccidentalProps = {
  note?: string;
  type: 'sharp' | 'flat';
};

const NoteAccidental = ({ note, type }: NoteAccidentalProps) => {
  const isFlat = type === 'flat';
  const label = isFlat ? '♭' : '♯';

  return (
    <span>
      {note}
      <span className={classnames(styles.accidental, {
        [styles.flat]: isFlat,
        [styles.sharp]: !isFlat
      })}>
        {label}
      </span>
    </span >
  );
}

export const Note = ({ className, note, showBothAccidentals }: NoteProps) => {
  const isAccidental = note?.displayFlat || note?.displaySharp;

  return (
    <span className={className}>
      {note?.display}
      {isAccidental ?
        <>
          <NoteAccidental
            note={note?.displaySharp}
            type="sharp"
          />
          {showBothAccidentals ? <>/
            <NoteAccidental
              note={note?.displayFlat}
              type="flat"
            />
          </> : null}
        </> : null
      }
    </span>
  );
}
