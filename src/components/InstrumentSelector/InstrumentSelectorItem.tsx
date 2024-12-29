import classnames from 'classnames';

import { InstrumentItem } from '@/components/InstrumentItem';
import { Instrument } from '@/types';

import styles from './InstrumentSelector.module.css';

type InstrumentSelectorItemProps = {
  instrument?: Instrument;
  onClick: () => void;
};

export const InstrumentSelectorItem = ({
  instrument,
  onClick,
}: InstrumentSelectorItemProps) => {
  const isEmpty = !instrument;

  return (
    <div className={styles.selection}>
      <button
        className={classnames(styles.button, {
          [styles.empty]: isEmpty,
        })}
        onClick={onClick}
      >
        <InstrumentItem instrument={instrument} />
      </button>
    </div>
  );
};
