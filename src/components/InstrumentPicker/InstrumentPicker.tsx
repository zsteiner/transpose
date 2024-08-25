'use client'
import { instrumentsArray } from '@/constants/instruments';

import { InstrumentItem } from './InstrumentItem';
import styles from './InstrumentPicker.module.css';

type InstrumentPickerProps = {
  onClose: () => void;
  onSelectInstrument: (iconName: string) => void;
};

export const InstrumentPicker = ({ onClose, onSelectInstrument }: InstrumentPickerProps) => {
  const handleClose = () => {
    console.log('close');
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
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
              onClick={() => onSelectInstrument(instrument.iconName)}
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
