'use client';
import { Note } from '@/components/Note';
import { useTranspose } from '@/components/useTranspose';

import styles from './TransposeMessage.module.css';

export const TransposeMessage = () => {
  const {
    instrument1,
    instrument2,
    originalNote,
    transposedNote,
    transposeFactor,
  } = useTranspose();

  if (!instrument1 || !instrument2) {
    return null;
  }

  return (
    <p className={styles.message}>
      <span>
        <strong>
          <Note
            note={originalNote}
            showBothAccidentals
          />
        </strong>{' '}
        on the {instrument1?.name} sounds the same as{' '}
        <strong>
          <Note
            note={transposedNote}
            showBothAccidentals
          />
        </strong>{' '}
        on the {instrument2?.name}.
      </span>
      {transposeFactor === 0 ? (
        <span>There is no need to transpose.</span>
      ) : null}
    </p>
  );
};
