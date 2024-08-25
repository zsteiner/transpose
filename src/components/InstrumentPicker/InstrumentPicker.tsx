'use client'
import { InstrumentItem } from '@/components/InstrumentItem';
import { instrumentsArray } from '@/constants/instruments';
import { Instrument } from '@/types';

import styles from './InstrumentPicker.module.css';

type InstrumentPickerProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSelect: (instrument?: Instrument) => void;
  selectedInstrument?: Instrument;
};

export const InstrumentPicker = ({ isOpen, onClose, onSelect }: InstrumentPickerProps) => {
  const handleClose = () => {
    console.log('close');
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.scrim}>
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
            key={instrument?.iconName}
          >
            <button
              className={styles.button}
              onClick={() => onSelect(instrument)}
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
