import { Container } from '@/types';
import writeNotation from '@/utils/writeNotation';

import { NotesDisplay } from '../NotesDisplay/NotesDisplay';
import { ReactAbc, ReactAbcConfig } from '../ReactAbc';
import styles from './Notation.module.css';

type NotationProps = Container & {
  isTransposed?: boolean;
  notes: string[];
  notationKey: string;
  transposeSemitones: number;
};

export const Notation = ({ className, notes, notationKey, transposeSemitones, isTransposed }: NotationProps) => {
  const notation = `L:4/4\nK:${notationKey}\n${writeNotation(notes)}`;

  const config = {
    paddingleft: 0,
    paddingright: 0,
    paddingtop: 0,
    paddingbottom: 0,
    expandToWidest: true,
    minPadding: 32,
    viewportHorizontal: false,
    responsive: 'resize',
    visualTranspose: transposeSemitones,
  } as ReactAbcConfig;


  return (
    <div className={styles.container}>
      <NotesDisplay className={className} isTransposed={isTransposed} notes={notes} />
      <ReactAbc config={config} notation={notation} />
    </div>
  )
}
