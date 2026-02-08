import { RefObject, useRef } from 'react';

import { InstrumentItem } from '@/components/InstrumentItem';
import { instrumentsArray } from '@/constants/instruments';
import { Instrument } from '@/types';

import styles from './InstrumentPicker.module.css';

type InstrumentPickerProps = {
  id?: string;
  onSelect: (instrument?: Instrument) => void;
  ref?: RefObject<HTMLDialogElement>;
  selectedInstrument?: Instrument;
};

export const useModal = () => {
  const ref = useRef<HTMLDialogElement>(null) as RefObject<HTMLDialogElement>;

  const onOpen = () => {
    ref.current?.showModal();
  };

  return {
    ref,
    onOpen,
  };
};

export const InstrumentPicker = ({
  id,
  onSelect,
  ref,
}: InstrumentPickerProps) => {
  const handleSelect = (instrument: Instrument) => {
    onSelect(instrument);
  };

  return (
    <dialog
      className={styles.picker}
      id={id}
      ref={ref}
    >
      <form
        className={styles.form}
        method="dialog"
      >
        <div className={styles.container}>
          <button className={styles.close}>close</button>
          <div className={styles.list}>
            {instrumentsArray.map((instrument) => (
              <button
                className={styles.button}
                key={instrument?.iconName}
                onClick={() => handleSelect(instrument)}
              >
                <InstrumentItem
                  instrument={instrument}
                  stretch
                />
              </button>
            ))}
          </div>
        </div>
      </form>
    </dialog>
  );
};
