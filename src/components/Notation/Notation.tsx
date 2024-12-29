import { Container } from '@/types';
import writeNotation from '@/utils/writeNotation';

import { NotesDisplay } from '../NotesDisplay/NotesDisplay';
import { ReactAbc } from '../ReactAbc';
import styles from './Notation.module.css';

type NotationProps = Container & {
  isTransposed?: boolean;
  notes: string[];
  notationKey: string;
  transposeSemitones: number;
};

export const Notation = ({
  className,
  notes,
  notationKey,
  transposeSemitones,
  isTransposed,
}: NotationProps) => {
  const notation = `L:4/4\nK:${notationKey}\n${writeNotation(notes)}`;

  return (
    <div className={styles.container}>
      <NotesDisplay
        className={className}
        isTransposed={isTransposed}
        notes={notes}
      />
      <ReactAbc
        expandToWidest
        minPadding={32}
        notation={notation}
        responsive="resize"
        viewportHorizontal={false}
        visualTranspose={transposeSemitones}
      />
    </div>
  );
};
