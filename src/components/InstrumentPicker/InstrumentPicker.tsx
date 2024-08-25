'use client';
import { instrumentsArray } from '@/constants/instruments';
import { Container } from '@/types';

import { InstrumentItem } from './InstrumentItem';
import styles from './InstrumentPicker.module.css';

export const InstrumentPicker = ({ children }: Container) => {
  const handleClose = () => {
    console.log('close');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  const selectInstrument = (iconName: string) => {
    console.log(iconName);
  };

  return (
    <div className="scrim">
      <section
        className={styles.picker}
        onKeyDown={handleKeyDown}
      >
        <button
          className={styles.close}
          onClick={handleClose}
        >
          close
        </button>
        <ul>
          {instrumentsArray.map((instrument) => (<li
            className={styles.item}
            key={instrument.iconName}
          >
            <button
              className={styles.button}
              onClick={() => selectInstrument(instrument.iconName)}
            >
              <InstrumentItem instrument={instrument}
                stretch
              />
            </button>
          </li >))}
        </ul >
      </section >
    </div >
  );
}
