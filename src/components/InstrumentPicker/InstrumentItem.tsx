'use client';
import classnames from 'classnames';

import { Instrument } from '@/types';

import styles from './InstrumentItem.module.css';

type InstrumentProps = {
  instrument: Instrument;
  stretch: boolean;
};

export const InstrumentItem = ({
  instrument,
  stretch,
}: InstrumentProps) => {
  const isEmpty = !instrument;
  const displayText = isEmpty ? 'add instrument' : instrument?.name;
  const displayIcon = () => {
    if (isEmpty) {
      return 'plus';
    }

    const { icon, iconName, key } = instrument;

    return icon ? iconName : key;
  };

  return (
    <span className={classnames(
      styles.instrument,
      {
        [styles.stretch]: stretch,
      },)
    }
    >
      <span className={
        classnames(
          styles.icon,
          {
            [styles.keyIcon]: !instrument?.icon,
          },
        )}
      >
        {/* <Icon
          class={styles.iconInternal}
          icon={displayIcon}
        /> */}
      </span >
      <span className={styles.name}>{displayText}</span>
    </span >
  )
}
