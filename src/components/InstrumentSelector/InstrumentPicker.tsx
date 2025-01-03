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
        <button className={styles.close}>close</button>
        <ul className={styles.list}>
          {instrumentsArray.map((instrument) => (
            <li
              className={styles.item}
              key={instrument?.iconName}
            >
              <button
                className={styles.button}
                onClick={() => handleSelect(instrument)}
              >
                <InstrumentItem
                  instrument={instrument}
                  stretch
                />
              </button>
            </li>
          ))}
        </ul>
      </form>
    </dialog>
  );
};
